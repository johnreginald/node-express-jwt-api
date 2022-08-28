const express = require('express');
const router = express.Router();
const UserController = require("../controllers/user.controller");
const registerValidation = require("../validations/register.validation");
const loginValidation = require("../validations/login.validation");
const validate = require("../helpers/validator");

router.post(
  "/register",
  validate(registerValidation),
  UserController.register
);

router.post(
    '/login',
  validate(loginValidation),
  UserController.login
);

module.exports = router;