const express = require('express');
const logger = require('morgan');

if (process.env.NODE_ENV === 'production') {
  require('dotenv').config();
} else {
  require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
  });
}

const apiPath = "/api/v1/";
const productRouter = require('./routes/product');
const cartRouter = require('./routes/cart');
const authRouter = require('./routes/auth');

const app = express();

app.use(logger('dev'))
app.use(express.json());

app.use(apiPath, cartRouter);
app.use(apiPath, productRouter);
app.use(apiPath, authRouter);

module.exports = app;
