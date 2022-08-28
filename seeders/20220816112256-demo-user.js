'use strict';

const encryptPassword = require("../helpers/encrypt-password");

module.exports = {
  async up (queryInterface) {
    return await queryInterface.bulkInsert('users', [{
      username: "john",
      email: "john@gmail.com",
      password: await encryptPassword("admin1234"),
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface) {
    return await queryInterface.bulkDelete('users', null, {});
  }
};
