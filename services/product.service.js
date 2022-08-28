const Product = require("../models/product.model");

async function createProduct(body) {
  return await Product.create({
    name: body.name,
    price: body.price,
    quantity: body.quantity,
  });
}

module.exports = {
  createProduct
}