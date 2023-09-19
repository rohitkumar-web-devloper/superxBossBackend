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
    await queryInterface.bulkInsert('vehiclesegmenttypes', [
      {
        name: "heavy commercial vehicle",
        icon: "default-image.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "tractor parts",
        icon: "default-image.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "passenger car",
        icon: "default-image.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "two wheeler",
        icon: "default-image.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "three wheeler",
        icon: "default-image.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "industrial use",
        icon: "default-image.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
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
