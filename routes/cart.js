const express = require('express');
const router = express.Router();
const validate = require("../helpers/validator");
const addToCartValidation = require("../validations/add-to-cart.validation");
const CartController = require("../controllers/cart.controller");
const isAuthenticated = require("../middlewares/auth.middleware");

router.post(
  "/cart",
  isAuthenticated(),
  validate(addToCartValidation),
  CartController.addToCart
);

router.get(
  "/cart",
  isAuthenticated(),
  CartController.cartDetail
);

router.delete(
  "/cart",
  isAuthenticated(),
  CartController.clearCart
);

router.post(
  "/cart/checkout",
  isAuthenticated(),
  CartController.checkout
);


module.exports = router;