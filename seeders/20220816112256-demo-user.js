'use strict';

module.exports = {
  async up (queryInterface) {
    return await queryInterface.bulkInsert('users', [{
      username: "john",
      email: "john@gmail.com",
      password: "admin1234",
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface) {
    return await queryInterface.bulkDelete('users', null, {});
  }
};
