'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserPermissions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserPermissions.init({
    user_id: DataTypes.INTEGER,
    permission_id: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'UserPermissions',
  });
  return UserPermissions;
};