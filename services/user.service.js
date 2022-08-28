const { models } = require("../models/index");

async function createUser(body) {
  return await models.user.create({
    username: body.username,
    password: body.password,
    email: body.email,
  });
}

module.exports = {
  createUser
}