const express = require('express');
const router = express.Router();
const UserController = require("../controllers/user.controller");
const createUserValidation = require("../validations/create-user.validation");
const validate = require("../helpers/validator");

router.post(
  "/register",
  validate(createUserValidation),
  UserController.register
);

router.post('/login',
  UserController.login);

module.exports = router;