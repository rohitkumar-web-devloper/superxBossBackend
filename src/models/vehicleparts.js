'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class VehicleParts extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            VehicleParts.belongsTo(models.Brand, {
                foreignKey: "vehicle_brand_id",
                as: "brand",
            });
        }
    }

    VehicleParts.init({
        product_id: DataTypes.INTEGER,
        product_name: DataTypes.STRING,
        product_brand_id: DataTypes.INTEGER,
        vehicle_brand_id: DataTypes.STRING,
        vehicle_id: DataTypes.STRING,

    }, {
        sequelize,
        modelName: 'VehicleParts',
    });
    return VehicleParts;
};