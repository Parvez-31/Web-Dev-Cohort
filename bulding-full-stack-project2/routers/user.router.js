import express from 'express';
import { userRegister } from '../controller/user.controller.js';

const route = express.Router();

route.get('/register', userRegister);

export default route;
