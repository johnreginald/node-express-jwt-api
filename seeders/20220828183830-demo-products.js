'use strict';

module.exports = {
  async up (queryInterface) {
    return await queryInterface.bulkInsert('products', [
      {
        name: "Product 1",
        price: 100,
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Product 2",
        price: 50,
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Product 3",
        price: 60,
        quantity: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down (queryInterface) {
    return await queryInterface.bulkDelete('products', null, {});
  }
};
