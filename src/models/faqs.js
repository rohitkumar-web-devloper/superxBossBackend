'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Faqs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Faqs.init({
    question:{
      type: DataTypes.STRING(200),
    },
    answer:{
      type: DataTypes.STRING(5000),
    },
    sorting:{
      type : DataTypes.INTEGER,
    },
    status:{
      type : DataTypes.BOOLEAN,
    },
    type:{
      type : DataTypes.STRING(50),
    },
    user_id:{
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Faqs',
  });
  return Faqs;
};