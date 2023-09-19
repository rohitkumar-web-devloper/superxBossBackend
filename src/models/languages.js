'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class languages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  languages.init({
    name: {
      type : DataTypes.STRING(50),
      unique : true
    },
   description :{
      type: DataTypes.STRING(200),
     default: null
   }
  }, {
    sequelize,
    modelName: 'languages',
  });
  return languages;
};