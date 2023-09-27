'use strict';
const { Permission } = require('../models')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert('Permissions', [
            {
                name: 'CREATE_CATEGORY',
                heading: "Category",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'UPDATE_CATEGORY',
                heading: "Category",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'CREATE_BRAND',
                heading: "Brand",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'UPDATE_BRAND',
                heading: "Brand",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'CREATE_VEHICLE',
                heading: "Vehicle",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'UPDATE_VEHICLE',
                heading: "Vehicle",
                createdAt: new Date(),
                updatedAt: new Date()
            },


            {
                name: 'CREATE_PRODUCT',
                heading: "Product",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'UPDATE_PRODUCT',
                heading: "Product",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'CREATE_USER',
                heading: "User",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'UPDATE_USER',
                heading: "User",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'UPDATE_CUSTOMER',
                heading: "Customer",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'CREATE_FAQ',
                heading: "Faq",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'UPDATE_FAQ',
                heading: "Faq",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'CREATE_ROLE',
                heading: "Role",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'UPDATE_ROLE',
                heading: "Role",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'CREATE_RECHARGE',
                heading: "Recharge",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'UPDATE_RECHARGE',
                heading: "Recharge",
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                name: 'CREATE_SHIPPING',
                heading: "Shipping",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'UPDATE_SHIPPING',
                heading: "Shipping",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'CREATE_COUPON',
                heading: "Coupon",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'UPDATE_COUPON',
                heading: "Coupon",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'CREATE_BANNER',
                heading: "Banner",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'DELETE_BANNER',
                heading: "Banner",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'UPDATE_RATING',
                heading: "Rating",
                createdAt: new Date(),
                updatedAt: new Date()
            },

        ], {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
