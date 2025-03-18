import express from 'express';
import {
  login,
  userRegister,
  verifyUser,
} from '../controller/user.controller.js';

const route = express.Router();

route.post('/register', userRegister);
route.get('/verify/:token', verifyUser);
route.post('/login', login);

export default route;
