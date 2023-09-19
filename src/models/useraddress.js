'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserAddress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserAddress.init({
    name: DataTypes.STRING,
    mobile : DataTypes.STRING,
    pin_code : DataTypes.STRING,
    street_address : DataTypes.STRING,
    city : DataTypes.STRING,
    state : DataTypes.STRING,
    type : DataTypes.STRING,
    user_id : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserAddress',
  });
  return UserAddress;
};