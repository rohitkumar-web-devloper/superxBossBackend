'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sliders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sliders.init({
    image:{
      type: DataTypes.STRING(50),
    },
    sorting:{
      type : DataTypes.INTEGER
    },
    user_id:{
      type :DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Sliders',
  });
  return Sliders;
};