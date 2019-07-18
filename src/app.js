require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

const morganOptions = (process.env.NODE_ENV === 'production')
  ? 'common' 
  : 'dev';

app.use(morgan(morganOptions));
app.use(helmet());
app.use(cors());

app.get('/', (req,res) => {
  res.send('Hello World');
});

module.exports = app;
