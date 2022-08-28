const express = require('express');
const logger = require('morgan');

require('dotenv').config()
require("./helpers/passport");

const authRouter = require('./routes/auth');
const productRouter = require('./routes/product');

const app = express();

app.use(logger('dev'))
app.use(express.json());

app.use('/products', productRouter);
app.use('/', authRouter);

module.exports = app;
