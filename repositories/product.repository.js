const Product = require("../models/product.model");

async function findAll() {
  return await Product.findAll();
}

module.exports = {
  findAll
}