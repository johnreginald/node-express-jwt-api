const express = require('express');
const logger = require('morgan');

require('dotenv').config()
require("./helpers/passport");

const authRouter = require('./routes/auth');
const passport = require("passport");

const app = express();

app.use(logger('dev'))
// app.use(passport.initialize({}));
app.use(express.json());

app.use('/', authRouter);

module.exports = app;
