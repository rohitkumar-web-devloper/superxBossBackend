'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Customers extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Customers.hasOne(models.Otp, {
                foreignKey: "user_id",
                as: "otpData",
            });
        }
    }

    Customers.init({
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        mobile: DataTypes.STRING,
        state: DataTypes.STRING,
        point: DataTypes.STRING,
        language: DataTypes.STRING,
        type: DataTypes.INTEGER,
        status: DataTypes.BOOLEAN,
        wallet_amount: DataTypes.STRING,
        business_type: DataTypes.STRING,
        business_name: DataTypes.STRING,
        business_contact_no: DataTypes.STRING,
        gst_no: DataTypes.STRING,
        token: DataTypes.STRING,
        fcm_token: DataTypes.STRING,
        profile_picture: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Customers',
    });
    return Customers;
};