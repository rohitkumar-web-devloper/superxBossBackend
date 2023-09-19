'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Categories', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            name: {
                type: Sequelize.STRING(50),
                unique : true
            },
            parent: {
                type: Sequelize.INTEGER,
                default: null,
            },
            icon: {
                type: Sequelize.STRING(100),
                // defaultValue: "default-image.jpg"
            },
            description: {
                type: Sequelize.STRING(200),
                default: null,
            },
            featured: {
                type: Sequelize.BOOLEAN,
            },
            trending: {
                type: Sequelize.INTEGER
            },
            sorting: {
                type: Sequelize.INTEGER
            },
            status: {
                type: Sequelize.BOOLEAN,
                // defaultValue: true
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
        await queryInterface.dropTable('Categories');
    }
};