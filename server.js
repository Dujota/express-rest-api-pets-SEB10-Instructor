const dotenv = require('dotenv');

dotenv.config();
const express = require('express');
require('./config/database');

const app = express();

app.use(express.json());

// Routes go here

app.listen(3000, () => {
  console.log('The express app is ready!');
});
