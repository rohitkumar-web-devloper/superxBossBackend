'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Vehicle_segments extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Vehicle_segments.belongsTo(models.User, {
                foreignKey: "user_id",
                as: "user",
            });
            Vehicle_segments.hasOne(models.VehicleYears, {
                foreignKey: "vehicle_id",
                as: "otpData",
            });
            Vehicle_segments.belongsTo(models.Brand, {
                foreignKey: "brand_id",
                as: "compData",
            });
        }
    }

    Vehicle_segments.init({
        name: {
            type: DataTypes.STRING(50),
        },
        icon: {
            type: DataTypes.STRING(50),
        },
        description: {
            type: DataTypes.STRING(200),
        },
        brand_id: {
            type: DataTypes.INTEGER
        },
        sorting: {
            type: DataTypes.INTEGER,
        },
        status: {
            type: DataTypes.BOOLEAN
        },
        user_id: {
            type: DataTypes.INTEGER
        },
    }, {
        sequelize,
        modelName: 'Vehicle_segments',
    });
    return Vehicle_segments;
};