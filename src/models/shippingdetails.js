'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShippingDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ShippingDetails.init({
    state: DataTypes.STRING,
    shippingPrice: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ShippingDetails',
  });
  return ShippingDetails;
};