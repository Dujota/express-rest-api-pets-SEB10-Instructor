const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

// controllers
const petsRouter = require('./controllers/pets.js');

dotenv.config();
require('./config/database');

const app = express();
app.use(morgan('dev'));
app.use(express.json());

// Routes go here
app.use('/pets', petsRouter);

app.listen(3000, () => {
  console.log('The express app is ready!');
});
