'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      {
        id: 1,
        name: 'Seni Tari'
      },
      {
        id: 2,
        name: 'Seni Musik'
      },
      {
        id: 3,
        name: 'Teater'
      },
      {
        id: 4,
        name: 'Festival Budaya'
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
