const sequelize = require('../models/index');
const {DataTypes} = require("sequelize");

module.exports = sequelize.define('user', {
  username: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING
}, {
  tableName: 'users'
})