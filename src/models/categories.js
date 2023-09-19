'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Categories extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // Categories.belongsTo(User, {
            //     foreignKey: 'myFooId'
            // });
            Categories.belongsTo(models.User, {
                foreignKey: "user_id",
                as: "user",
            });
        }
    }

    Categories.init({
        name: DataTypes.STRING,
        parent: DataTypes.STRING,
        icon: DataTypes.STRING,
        description: DataTypes.STRING,
        featured: DataTypes.BOOLEAN,
        trending: DataTypes.STRING,
        sorting: DataTypes.STRING,
        status: DataTypes.BOOLEAN,
        user_id: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Categories',
    });
    return Categories;
};