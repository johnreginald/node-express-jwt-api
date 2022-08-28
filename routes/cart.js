const express = require('express');
const router = express.Router();
const validate = require("../helpers/validator");
const addToCartValidation = require("../validations/add-to-cart.validation");
const CartController = require("../controllers/cart.controller");
const isAuthenticated = require("../middlewares/auth.middleware");

router.post(
  "/",
  isAuthenticated(),
  validate(addToCartValidation),
  CartController.addToCart
);

router.get(
  "/",
  isAuthenticated(),
  CartController.cartDetail
);

router.post(
  "/checkout",
  isAuthenticated(),
  CartController.checkout
);

router.delete(
  "/",
  isAuthenticated(),
  CartController.clearCart
);


module.exports = router;