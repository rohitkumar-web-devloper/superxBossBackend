'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Faqs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      question:{
        type: Sequelize.STRING(100),
      },
      answer:{
        type: Sequelize.STRING(5000),
      },
      sorting:{
        type : Sequelize.INTEGER,
      },
      status:{
        type : Sequelize.BOOLEAN,
      },
      type:{
        type : Sequelize.STRING(50),
      },
      user_id:{
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
    await queryInterface.dropTable('Faqs');
  }
};