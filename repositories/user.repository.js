const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

async function findByUsername(username) {
  return await User.findOne({
    where: {
      username: username
    }
  });
}

async function findByUsernameAndPassword(username, password) {
  const user = await this.findByUsername(username);
  
  if (!user) {
    return null;
  }
  
  const result = await bcrypt.compare(password, user.password);
  
  return result ? user : null;
}

module.exports = {
  findByUsername,
  findByUsernameAndPassword
}