const CartService = require("../services/cart.service");
const CartRepository = require("../repositories/cart.repository");

const addToCart = async function (req, res) {
  const cart = await CartService.addToCart(req.body, req.user.id);
  res.status(200).json(cart);
}

const cartDetail = async function (req, res) {
  const productsInCart = await CartRepository.getCartDetailByUserId(req.user.id);

  res.status(200).json(productsInCart);
}

const checkout = async function (req, res) {
  await CartService.checkout(req.user.id);

  res.status(200).json({
    message: "Successfully checked out",
  });
}

const clearCart = async function (req, res) {
  await CartService.clearCart(req.user.id);

  res.status(200).json({
    message: "Successfully cleared cart",
  });
}

module.exports = {
  addToCart,
  cartDetail,
  checkout,
  clearCart,
}