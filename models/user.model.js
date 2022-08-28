const encryptPassword = require("../helpers/encrypt-password");

module.exports = (sequelize, DataTypes) => {
  sequelize.define('user', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    tableName: 'users',
    hooks: {
      beforeCreate: async (user) => {
        user.password = await encryptPassword(user.password);
      }
    }
  })
}