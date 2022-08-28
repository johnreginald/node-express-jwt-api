module.exports = (sequelize, DataTypes) => {
  sequelize.define('cart_item', {
    cart_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    tableName: 'cart_items'
  })
}