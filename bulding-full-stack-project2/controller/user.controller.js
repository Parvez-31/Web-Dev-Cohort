import User from '../model/User.model.js';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const userRegister = async (req, res) => {
  // get data
  // validate
  // check if user already exists
  // create a user in database
  // create a varification token
  // save token in database
  // send token as email to user
  // send success status to user

  const { name, email, password } = req.body;
  console.log(req.body);
  if (!name || !email || !password) {
    return res.status(400).json({
      message: 'All field are required',
    });
  }

  // console.log(email);
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: 'User already exists',
      });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    if (!user) {
      return res.status(400).json({
        message: 'User not registered',
      });
    }

    const token = crypto.randomBytes(32).toString('hex');
    console.log(token);

    user.varificationToken = token;

    await user.save();

    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });

    const mailOption = {
      from: process.env.MAILTRAP_SENDEREMAIL, // sender address
      to: user.email, // list of receivers
      subject: 'Verify your email ✔', // Subject line
      text: `Please click on the following link: ${process.env.PORT}/api/v1/users/verify/${token}`, // plain text body
    };

    await transporter.sendMail(mailOption);

    res.status(201).json({
      message: 'User registered successfully',
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: 'User not registered',
      error,
      success: false,
    });
  }
};

export const verifyUser = async (req, res) => {
  // get token from url
  // validate
  // find user based on token
  // if not
  // set isVarified field to true
  // romove verification token
  // save
  // return response

  const { token } = req.params;
  console.log(token);

  if (!token) {
    return res.status(400).json({
      message: 'Invalid token',
    });
  }

  const user = await User.findOne({
    varificationToken: token,
  });

  if (!user) {
    return res.status(400).json({
      message: 'Invalid token',
    });
  }

  user.isVarified = true;
  user.varificationToken = undefined;
  await user.save();
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: 'All fields are required',
    });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: 'email and password are not matched',
      });
    }

    const isMatch = bcrypt.compare(password, user.password);
    console.log(isMatch);

    if (!isMatch) {
      return res.status(400).json({
        message: 'email and password are not matched',
      });
    }

    const token = jwt.sign({ id: user._id }, 'shhhhh', { expiresIn: '7d' });

    const cookieOptions = {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    };

    res.cookie('token', token, cookieOptions);

    res.status(201).json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: 'User not Login',
      error,
    });
  }
};
