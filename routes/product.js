const express = require('express');
const router = express.Router();
const ProductController = require("../controllers/product.controller");
const validate = require("../helpers/validator");
const createProductValidation = require("../validations/create-product.validation");
const isAuthenticated = require("../middlewares/auth.middleware");

router.get(
  "/products",
  ProductController.getProducts
);

router.post(
  "/products",
  isAuthenticated(),
  validate(createProductValidation),
  ProductController.createProduct
);

module.exports = router;