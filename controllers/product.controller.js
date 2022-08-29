const ProductRepository = require('../repositories/product.repository');
const ProductService = require('../services/product.service');

const getProducts = async function (req, res) {
  const products = await ProductRepository.findAll();
  return res.status(200).json(products);
}

const createProduct = async function(req, res) {
  const product = await ProductService.createProduct(req.body);
  return res.status(201).json(product);
}

module.exports = {
  getProducts,
  createProduct
}