const joi = require('joi');
const UserRepository = require('../repositories/user.repository');

const checkUniqueUsername = (value, helpers) => {
  const user = UserRepository.findByUsername(value);
  
  if (user) {
    return helpers.error('username already exists');
  }
  
  return true;
}

module.exports = joi.object({
  username: joi.string().alphanum().min(3).max(30).required().custom(checkUniqueUsername).message('Username already exists'),
  password: joi.string().required().min(8),
  email: joi.string().email().required()
});
