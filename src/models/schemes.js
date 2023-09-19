'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schemes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Schemes.init({
    title:{
      type: DataTypes.STRING(100),
      unique: true
    },
    image:{
      type: DataTypes.STRING(50),
      default : null
    },
    description:{
      type : DataTypes.STRING(200),
      default: null
    },
    sorting:{
      type : DataTypes.INTEGER,
    },
    status:{
      type : DataTypes.INTEGER,
    },
    user_id:{
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Schemes',
  });
  return Schemes;
};