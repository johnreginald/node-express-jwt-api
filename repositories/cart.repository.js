const { models } = require("../models/index");

const getCartDetailByUserId = async (userId, cartId) => {
  const cart = await models.cart.findOne({
    where: {
      user_id: userId,
      checked_out: null,
    }
  }, {
    include: [{
      model: models.cart_item,
      as: "cartItems",
    }]
  });

  try {
    const cartItems = await cart.getCartItems({
      include: [{
        model: models.product,
        as: "product",
      }]
    });

    return cartItems.map(cartItem => {
      return cartItem.product;
    });
  } catch (error) {
    return [];
  }
}

module.exports = {
  getCartDetailByUserId
}