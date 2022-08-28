'use strict';

const sequelize = require('../models/index');
const {DataTypes} = require("sequelize");

module.exports = sequelize.define('product', {
  name: DataTypes.STRING,
  price: DataTypes.INTEGER,
  quantity: DataTypes.INTEGER
}, {
  tableName: 'products'
})