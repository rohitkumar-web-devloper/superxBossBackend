'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coupon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Coupon.init({
    code: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    min_cart_amt : DataTypes.INTEGER,
    description : DataTypes.STRING,
    start_date : DataTypes.STRING,
    end_date : DataTypes.STRING,
    status : DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Coupon',
  });
  return Coupon;
};