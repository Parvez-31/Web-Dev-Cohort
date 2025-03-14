import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './utils/db.js';

// Import all routes
import router from './routes/user_routes.js';

dotenv.config();
const app = express();

app.use(
  cors({
    origin: process.env.BASE_URL,
    credentials: true,
    methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Parvez!');
});

app.get('/afroja', (req, res) => {
  res.send('Hello Afroja gandu!');
});

// Connect to db
db();

// User routes
app.use('api/v1/users/', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
