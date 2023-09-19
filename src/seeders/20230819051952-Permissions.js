'use strict';
const {Permission} = require('../models')
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
        await queryInterface.bulkInsert('Permissions',  [
            {
                name: 'CREATE_DEPARTMENT',
                code: 'CREATE_DEPARTMENT',
                heading: "Department",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'UPDATE_DEPARTMENT',
                code: 'UPDATE_DEPARTMENT',
                heading: "Department",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'READ_DEPARTMENT',
                code: 'READ_DEPARTMENT',
                heading: "Department",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'DELETE_DEPARTMENT',
                code: 'DELETE_DEPARTMENT',
                heading: "Department",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'CREATE_ROLE',
                code: 'CREATE_ROLE',
                heading: "Role",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'UPDATE_ROLE',
                code: 'UPDATE_ROLE',
                heading: "Role",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'READ_ROLE',
                code: 'READ_ROLE',
                heading: "Role",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'DELETE_ROLE',
                code: 'DELETE_ROLE',
                heading: "Role",
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                name: 'CREATE_BRANCH',
                code: 'CREATE_BRANCH',
                heading: "Branch",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'UPDATE_BRANCH',
                code: 'UPDATE_BRANCH',
                heading: "Branch",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'READ_BRANCH',
                code: 'READ_BRANCH',
                heading: "Branch",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'DELETE_BRANCH',
                code: 'DELETE_BRANCH',
                heading: "Branch",
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                name: 'CREATE_LEAD',
                code: 'CREATE_LEAD',
                heading: "Lead",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'UPDATE_LEAD',
                code: 'UPDATE_LEAD',
                heading: "Lead",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'READ_LEAD',
                code: 'READ_LEAD',
                heading: "Lead",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'DELETE_LEAD',
                code: 'DELETE_LEAD',
                heading: "Lead",
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                name: 'CREATE_FEES',
                code: 'CREATE_FEES',
                heading: "Fees",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'UPDATE_FEES',
                code: 'UPDATE_FEES',
                heading: "Fees",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'READ_FEES',
                code: 'READ_FEES',
                heading: "Fees",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'DELETE_FEES',
                code: 'DELETE_FEES',
                heading: "Fees",
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                name: 'CREATE_USER',
                code: 'CREATE_USER',
                heading: "User",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'UPDATE_USER',
                code: 'UPDATE_USER',
                heading: "User",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'READ_USER',
                code: 'READ_USER',
                heading: "User",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'DELETE_USER',
                code: 'DELETE_USER',
                heading: "User",
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                name: 'CREATE_SOURCE',
                code: 'CREATE_SOURCE',
                heading: "Source",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'UPDATE_SOURCE',
                code: 'UPDATE_SOURCE',
                heading: "Source",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'READ_SOURCE',
                code: 'READ_SOURCE',
                heading: "Source",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'DELETE_SOURCE',
                code: 'DELETE_SOURCE',
                heading: "Source",
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                name: 'CREATE_STATUS',
                code: 'CREATE_STATUS',
                heading: "Status",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'UPDATE_STATUS',
                code: 'UPDATE_STATUS',
                heading: "Status",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'READ_STATUS',
                code: 'READ_STATUS',
                heading: "Status",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'DELETE_STATUS',
                code: 'DELETE_STATUS',
                heading: "Status",
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                name: 'CREATE_BANK_DETAIL',
                code: 'CREATE_BANK_DETAIL',
                heading: "Bank Detail",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'UPDATE_BANK_DETAIL',
                code: 'UPDATE_BANK_DETAIL',
                heading: "Bank Detail",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'READ_BANK_DETAIL',
                code: 'READ_BANK_DETAIL',
                heading: "Bank Detail",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'DELETE_BANK_DETAIL',
                code: 'DELETE_BANK_DETAIL',
                heading: "Bank Detail",
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                name: 'CREATE_CONTACT_DETAIL',
                code: 'CREATE_CONTACT_DETAIL',
                heading: "Contact Detail",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'UPDATE_CONTACT_DETAIL',
                code: 'UPDATE_CONTACT_DETAIL',
                heading: "Contact Detail",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'READ_CONTACT_DETAIL',
                code: 'READ_CONTACT_DETAIL',
                heading: "Contact Detail",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'DELETE_CONTACT_DETAIL',
                code: 'DELETE_CONTACT_DETAIL',
                heading: "Contact Detail",
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
