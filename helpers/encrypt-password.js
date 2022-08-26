const bcrypt = require('bcrypt');

async function encryptPassword(password) {
  // encrypt the password with bcrypt and return encrypted string
  const salt = await bcrypt.genSalt(12);
  return await bcrypt.hash(password, salt);
}

module.exports = encryptPassword;