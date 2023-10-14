'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CategoryProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index`   file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CategoryProduct.belongsTo(models.Products, {
        foreignKey: "product_id",
        as: "productData"
      })
    }
  }
  CategoryProduct.init({
    product_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CategoryProduct',
  });
  return CategoryProduct;
};