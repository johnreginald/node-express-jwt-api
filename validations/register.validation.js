const joi = require('joi');

module.exports = joi.object({
  username: joi.string().alphanum().min(3).max(30).required(),
  password: joi.string().required().min(8),
  email: joi.string().email().required()
});
