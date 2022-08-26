const User = require("../models/user.model");
const encryptPassword = require("../helpers/encrypt-password");

async function createUser(body) {
  try {
    const user = await User.create({
      username: body.username,
      password: await encryptPassword(body.password),
      email: body.email,
    });
  
    return {
      username: user.username,
      email: user.email
    }
  } catch (error) {
    return error;
  }
}

module.exports = {
  createUser
}