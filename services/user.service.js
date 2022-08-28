const User = require("../models/user.model");
const encryptPassword = require("../helpers/encrypt-password");

async function createUser(body) {
  return await User.create({
    username: body.username,
    password: await encryptPassword(body.password),
    email: body.email,
  });
}

module.exports = {
  createUser
}