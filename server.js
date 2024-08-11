const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config();
const express = require('express');
require('./config/database');

const app = express();
app.use(morgan('dev'));
app.use(express.json());

// Routes go here

app.listen(3000, () => {
  console.log('The express app is ready!');
});
