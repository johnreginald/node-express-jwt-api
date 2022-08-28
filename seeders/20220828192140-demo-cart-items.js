'use strict';

module.exports = {
  async up (queryInterface) {
    return await queryInterface.bulkInsert('cart_items', [
      {
        cart_id: 1,
        product_id: 1,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cart_id: 1,
        product_id: 2,
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cart_id: 1,
        product_id: 3,
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cart_id: 2,
        product_id: 1,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface) {
    return await queryInterface.bulkDelete('cart_items', null, {});
  }
};
