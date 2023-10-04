'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Segment_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Segment_type.init({
    product_id: DataTypes.INTEGER,
    segment_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Segment_type',
  });
  return Segment_type;
};