'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            User.hasOne(models.Otp, {
                foreignKey: "user_id",
                as: "otpData",
            });
            // User.belongsTo(models.Categories, {
            //     foreignKey: "user_id",
            //     as: "user",
            // });
        }
    }

    User.init({
        name: {
            type: DataTypes.STRING,
        },
        mobile: {
            type: DataTypes.STRING,
            unique: true,
            min: 10,
            max: 10
        },
        whats_app: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        role: {
            type: DataTypes.INTEGER
        },
        status: {
            type: DataTypes.BOOLEAN
        },
        user_id: {
            type: DataTypes.INTEGER
        },
        password: {
            type: DataTypes.STRING,
        },
        token: {
            type: DataTypes.STRING
        },
        profile_picture: {
            type: DataTypes.STRING
        },

    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};