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

    await queryInterface.bulkInsert('event_categories', [
      {
        event_id: 1,
        category_id: 1,
      },
      {
        event_id: 1,
        category_id: 4,
      },
      {
        event_id: 2,
        category_id: 1,
      },
      {
        event_id: 3,
        category_id: 3,
      },
      {
        event_id: 4,
        category_id: 3,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
    await queryInterface.bulkDelete('event_categories', null, {});
  }
};
