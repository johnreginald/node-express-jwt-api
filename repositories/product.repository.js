const { models } = require("../models/index");

async function findAll() {
  return await models.product.findAll();
}

module.exports = {
  findAll
}