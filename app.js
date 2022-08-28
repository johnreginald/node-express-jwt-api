const express = require('express');
const logger = require('morgan');

require('dotenv').config()

const productRouter = require('./routes/product');
const cartRouter = require('./routes/cart');
const authRouter = require('./routes/auth');

const app = express();

app.use(logger('dev'))
app.use(express.json());

app.use('/cart', cartRouter);
app.use('/products', productRouter);
app.use('/', authRouter);

module.exports = app;
