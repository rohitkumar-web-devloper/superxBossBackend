'use strict';
const {User} = require('../models')
const bcrypt = require('bcryptjs');
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
        const users = [
            {
                name: "admin",
                password: "admin123",
                profile_picture: 'default-image.jpg',
                role: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ];

        // await queryInterface.bulkInsert("Users", users, {});

        for (let user of users) {
            const salt = bcrypt.genSaltSync();

            user.password = bcrypt.hashSync(user.password, salt);
            await User.create(user);
        }
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
