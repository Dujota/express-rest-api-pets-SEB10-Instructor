const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');

// controllers
const petsRouter = require('./controllers/pets.js');

dotenv.config();
require('./config/database');

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
app.use(morgan('dev'));
app.use(express.json());

// Routes go here
app.use('/pets', petsRouter);

app.listen(3000, () => {
  console.log('The express app is ready!');
});
