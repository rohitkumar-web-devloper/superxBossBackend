'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Customers', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            first_name: {
                type: Sequelize.STRING(30),
                defaultValue: null,
            },
            last_name: {
                type: Sequelize.STRING(30)
            },
            email: {
                type: Sequelize.STRING
            },
            mobile: {
                type: Sequelize.STRING(10)
            },
            state: {
                type: Sequelize.STRING(50)
            },
            wallet_amount: {
                type: Sequelize.STRING(50)
            },
            refer_code: {
                type: Sequelize.STRING(50)
            },
            refrence_code: {
                type: Sequelize.STRING(50)
            },
            status: {
                type: Sequelize.BOOLEAN
            },
            point: {
                type: Sequelize.INTEGER
            },
            language: {
                type: Sequelize.STRING(150)
            },
            type: {
                type: Sequelize.STRING(20)
            },
            business_type: {
                type: Sequelize.STRING(50)
            },
            business_name: {
                type: Sequelize.STRING(200)
            },
            business_contact_no: {
                type: Sequelize.STRING(10)
            },
            gst_no: {
                type: Sequelize.STRING(15)
            },
            token: {
                type: Sequelize.STRING(300)
            },
            fcm_token: {
                type: Sequelize.STRING(200)
            },
            profile_picture: {
                type: Sequelize.STRING(50)
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
        await queryInterface.dropTable('Customers');
    }
};