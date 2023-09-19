'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(50),
      },
      mobile:{
        type : Sequelize.STRING(10),
        unique : true
      },
      whats_app : {
        type : Sequelize.STRING(),
        default : null,
      },  
      address:{
        type : Sequelize.STRING(150)
      },
      email: {
        type : Sequelize.STRING(100),
        unique: true
      },
      role:{
        type : Sequelize.INTEGER,
      },
      status:{
        type : Sequelize.BOOLEAN
      },
      user_id:{
        type : Sequelize.INTEGER,
        default: null,
      },
      password:{
        type : Sequelize.STRING
      },
      profile_picture:{
        type: Sequelize.STRING(),
        defaultValue: "default-image.jpg"
      },
      token:{
        type : Sequelize.STRING(300),
        default: null,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};