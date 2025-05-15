'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ticket_categories', [
      {
        ticket_id: 1,
        name: 'Dewasa',
        price: 142500,
        quota: 100,
        sold: 0,
        is_active: true
      },
      {
        ticket_id: 1,
        name: 'Anak',
        price: 71250,
        quota: 100,
        sold: 0,
        is_active: true
      },
      {
        ticket_id: 2,
        name: 'Dewasa',
        price: 150000,
        quota: 100,
        sold: 0,
        is_active: true
      },
      {
        ticket_id: 2,
        name: 'Anak',
        price: 75000,
        quota: 100,
        sold: 0,
        is_active: true
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ticket_categories', null, {});
  }
};
