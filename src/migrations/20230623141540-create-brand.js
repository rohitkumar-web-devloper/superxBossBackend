'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Brands', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            name: {
                type: Sequelize.STRING(50),
                unique: true
            },
            logo: {
                type: Sequelize.STRING(50),
                default: null,
            },
            description: {
                type: Sequelize.STRING(200),
                default: null,
            },
            type: {
                type: Sequelize.STRING(20)
            },
            featured: {
                type: Sequelize.BOOLEAN
            },
            sorting:{
                type :Sequelize.INTEGER
            },
            status: {
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
        await queryInterface.dropTable('Brands');
    }
};