'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MyCarts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(50)
      },
      product_id:{
        type : Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER(50)
      },
      b2b_price: {
        type: Sequelize.INTEGER(50)
      },
      any_discount: {
        type: Sequelize.INTEGER(50)
      },
      brand_id: {
        type: Sequelize.INTEGER
      },
      item_stock: {
        type: Sequelize.INTEGER(50)
      },
      qty:{
        type : Sequelize.INTEGER
      },
      sku_id: {
        type: Sequelize.STRING(50)
      },
      tax_rate: {
        type: Sequelize.INTEGER(50)
      },
      hsn_code: {
        type: Sequelize.STRING(50)
      },
      ship_days: {
        type: Sequelize.INTEGER(10)
      },
      return_days: {
        type: Sequelize.INTEGER(10),
        default: "NonReturnable",
      },
      return_policy: {
        type: Sequelize.STRING()
      },
      video: {
        type: Sequelize.STRING(300)
      },
      weight: {
        type: Sequelize.STRING(50)
      },
      // height: {
      //     type: Sequelize.STRING(50)
      // },
      // width: {
      //     type: Sequelize.STRING(50)
      // },
      // length: {
      //     type: Sequelize.STRING(50)
      // },
      // refund: {
      //     type: Sequelize.BOOLEAN
      // },
      featured: {
        type: Sequelize.BOOLEAN
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('MyCarts');
  }
};