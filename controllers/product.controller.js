const productRepository = require('../repositories/product.repository');
const productService = require('../services/product.service');

const getProducts = async function (req, res) {
  const products = await productRepository.findAll();
  return res.status(200).json(products);
}

const createProduct = async function(req, res) {
  const product = await productService.createProduct(req.body);
  return res.status(201).json(product);
}

module.exports = {
  getProducts,
  createProduct
}