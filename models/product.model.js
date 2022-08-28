module.exports = (sequelize, DataTypes) => {
  sequelize.define('product', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    tableName: 'products'
  })
}
