'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Brand extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Brand.belongsTo(models.User , {
                foreignKey: "user_id",
                as: "user",
            });
            Brand.hasOne(models.Vehicle_segments , {
                foreignKey: "brand_id",
                as: "compData",
            });
            
            

        }
    }

    Brand.init({
        name: {
            type: DataTypes.STRING,
            unique: true
        },
        logo: {
            type: DataTypes.STRING,
            default: null
        },
        description: {
            type: DataTypes.STRING,
            default: null
        },
        type: {
            type: DataTypes.STRING,
        },
        featured: {
            type: DataTypes.BOOLEAN,
        },
        sorting: {
            type: DataTypes.INTEGER,
        },
        status: {
            type: DataTypes.BOOLEAN,
        },
        user_id: {
            type: DataTypes.INTEGER,
        },

    }, {
        sequelize,
        modelName: 'Brand',
    });
    return Brand;
};