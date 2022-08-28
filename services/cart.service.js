const { models } = require("../models/index");

async function addToCart(body, userId) {
  const cart = await models.cart.create({
    user_id: userId,
    checked_out: new Date(),
  })

  cart.createCartItem({
    cart_id: cart.id,
    product_id: body.product,
    quantity: body.quantity,
  });

  return cart;
}

async function checkout(userId) {
  return await models.cart.update({
    checked_out: new Date(),
  }, {
    where: {
      user_id: userId,
    }
  });
}


async function clearCart(userId) {
  return await models.cart.destroy({
    where: {
      user_id: userId,
    }
  });
}

module.exports = {
  addToCart,
  checkout,
  clearCart
}