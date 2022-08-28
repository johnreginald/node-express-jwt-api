'use strict';

const {Sequelize, DataTypes} = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];

const sequelize = new Sequelize(config);

const modelDefiners = [
  require('./user.model'),
  require('./product.model'),
  require('./cart.model'),
  require('./cart_item.model'),
];

for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize, DataTypes);
}

sequelize.models.cart.hasMany(sequelize.models.cart_item, {as: "cartItems",foreignKey: 'cart_id', sourceKey: 'id'});
sequelize.models.cart.belongsTo(sequelize.models.user, {as: "user", foreignKey: 'user_id', targetKey: 'id'});
sequelize.models.cart_item.belongsTo(sequelize.models.product, {as: "product", foreignKey: 'product_id', targetKey: 'id'});

module.exports = sequelize;
