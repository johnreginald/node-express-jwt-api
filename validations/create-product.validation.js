const joi = require('joi');

module.exports = joi.object({
  name: joi.string().min(3).max(255).required(),
  price: joi.number().integer().min(1).required(),
  quantity: joi.number().integer().min(1).required(),
});
