const joi = require('joi');

module.exports = joi.object({
  product: joi.number().integer().min(1).required(),
  quantity: joi.number().integer().min(1).required(),
});
