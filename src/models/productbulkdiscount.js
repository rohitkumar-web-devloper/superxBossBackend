'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductBulkDiscount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductBulkDiscount.init({
    product_id : DataTypes.INTEGER,
    item_count : DataTypes.INTEGER,
    bulk_discount : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductBulkDiscount',
  });
  return ProductBulkDiscount;
};