'use strict';

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
    await queryInterface.bulkInsert(
      "UserPermissions",
      [
        {
          user_id: 1,
          permission_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          permission_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          permission_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          permission_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          user_id: 1,
          permission_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          user_id: 1,
          permission_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          user_id: 1,
          permission_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          user_id: 1,
          permission_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          user_id: 1,
          permission_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          user_id: 1,
          permission_id: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          user_id: 1,
          permission_id: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          user_id: 1,
          permission_id: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          user_id: 1,
          permission_id: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          user_id: 1,
          permission_id: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          user_id: 1,
          permission_id: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          user_id: 1,
          permission_id: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          user_id: 1,
          permission_id: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          user_id: 1,
          permission_id: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          user_id: 1,
          permission_id: 19,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          user_id: 1,
          permission_id: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          user_id: 1,
          permission_id: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          user_id: 1,
          permission_id: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
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
