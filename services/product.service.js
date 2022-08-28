const { models } = require("../models/index");

async function createProduct(body) {
  return await models.product.create({
    name: body.name,
    price: body.price,
    quantity: body.quantity,
  });
}

module.exports = {
  createProduct
}