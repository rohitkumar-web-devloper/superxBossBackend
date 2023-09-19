'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MyCart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MyCart.belongsTo(models.Brand, {
        foreignKey: "brand_id",
        as: "brand",
      });

      MyCart.hasMany(models.ProductImage, {
        foreignKey: "product_id",
        as: "productImage"
      });
    }
  }
  MyCart.init({
    name: DataTypes.STRING,
    video: DataTypes.STRING,
    price: DataTypes.INTEGER,
    product_id : DataTypes.INTEGER,
    b2b_price: DataTypes.INTEGER,
    any_discount: DataTypes.INTEGER,
    brand_id: DataTypes.INTEGER,
    item_stock: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    sku_id: DataTypes.STRING,
    tax_rate: DataTypes.INTEGER,
    hsn_code: DataTypes.STRING,
    ship_days: DataTypes.INTEGER,
    return_days: DataTypes.INTEGER,
    return_policy: DataTypes.STRING,
    weight: DataTypes.STRING,
    // height: DataTypes.STRING,
    // width: DataTypes.STRING,
    // length: DataTypes.STRING,
    // refund: DataTypes.STRING,
    featured: DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MyCart',
  });
  return MyCart;
};