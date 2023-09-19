'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Products extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Products.belongsTo(models.Brand, {
                foreignKey: "brand_id",
                as: "brand",
            });

            Products.hasMany(models.ProductImage, {
                foreignKey: "product_id",
                as: "productImage"
            });
            Products.hasMany(models.ProductBulkDiscount, {
                foreignKey: "product_id",
                as: "bulkDiscount"
            });
            Products.belongsTo(models.VehicleSegmentType, {
                foreignKey: "segment_type",
                as: "segment"
            });
        }
    }

    Products.init({
        name: DataTypes.STRING,
        video: DataTypes.STRING,
        price: DataTypes.INTEGER,
        b2b_price: DataTypes.INTEGER,
        point: DataTypes.INTEGER,
        new_arrival: DataTypes.BOOLEAN,
        pop_item: DataTypes.BOOLEAN,
        part_no: DataTypes.STRING,
        segment_type: DataTypes.INTEGER,
        min_qty: DataTypes.INTEGER,
        wish_product: DataTypes.BOOLEAN,
        any_discount: DataTypes.INTEGER,
        brand_id: DataTypes.INTEGER,
        item_stock: DataTypes.INTEGER,
        sku_id: DataTypes.STRING,
        tax_rate: DataTypes.INTEGER,
        hsn_code: DataTypes.STRING,
        ship_days: DataTypes.INTEGER,
        return_days: DataTypes.INTEGER,
        return_policy: DataTypes.STRING,
        weight: DataTypes.STRING,
        unit: DataTypes.STRING,
        // height: DataTypes.STRING,
        // width: DataTypes.STRING,
        // length: DataTypes.STRING,
        // refund: DataTypes.STRING,
        trend_part: DataTypes.BOOLEAN,
        user_id: DataTypes.INTEGER

    }, {
        sequelize,
        modelName: 'Products',
    });
    return Products;
};