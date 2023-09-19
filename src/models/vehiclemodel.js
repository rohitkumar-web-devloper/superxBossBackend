'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class VehicleModel extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    VehicleModel.init({
        product_id: DataTypes.INTEGER,
        vehicle_segment_id: DataTypes.INTEGER,
        vehicle_brand_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'VehicleModel',
    });
    return VehicleModel;
};