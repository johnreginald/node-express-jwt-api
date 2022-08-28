const User = require("../models/user.model");

module.exports = (sequelize, DataTypes) => {
  sequelize.define('cart', {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id'
      }
    },
    checked_out: {
      type: DataTypes.DATE,
      defaultValue: null
    }
  }, {
    tableName: 'carts'
  })
}