'use strict';

module.exports = {
  async up (queryInterface) {
    return await queryInterface.bulkInsert('carts', [
      {
        user_id: 1,
        checked_out: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        checked_out: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down (queryInterface) {
    return await queryInterface.bulkDelete('carts', null, {});
  }
};
