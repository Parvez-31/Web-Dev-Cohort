import User from '../model/User.model.js';
import nodemailer from 'nodemailer';
import crypto from 'crypto';

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
    res.status(201).json({
      message: 'User not registered',
      success: false,
    });
  }
};
