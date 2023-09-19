'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Orders.init({
    order_id : DataTypes.STRING,
    name: DataTypes.STRING,
    mobile : DataTypes.STRING,
    pin_code : DataTypes.STRING,
    street_address : DataTypes.STRING,
    city : DataTypes.STRING,
    state : DataTypes.STRING,
    type: DataTypes.STRING,
    address_type : DataTypes.STRING,
    transction_id : DataTypes.STRING, 
    user_id: DataTypes.INTEGER,
    discount : DataTypes.INTEGER,
    total_amount : DataTypes.INTEGER,
    status: DataTypes.STRING,
    ship_charge : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};