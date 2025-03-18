import express from 'express';
import db from './utils/db.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();
//Import all routes
import route from './routers/user.router.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.BASE_URL,
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// db conncet
db();

// route
app.use('/api/v1/users', route);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
