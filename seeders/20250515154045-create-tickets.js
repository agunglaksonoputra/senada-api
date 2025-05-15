'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tickets', [
      {
        event_id: '1',
        name: '[Best Selling] Tiket Masuk Pertunjukan Pertama (18:00 - 19:00)',
        session_start_time: '18:00:00',
        session_end_time: '19:00:00',
        session_start_date: '2025-06-09',
        session_end_date: '2025-06-09',
        is_active: true,
        is_sold: false
      },
      {
        event_id: '1',
        name: '[Best Selling] Tiket Masuk Pertunjukan Kedua (19:00 - 20:00)',
        session_start_time: '19:00:00',
        session_end_time: '20:00:00',
        session_start_date: '2025-06-09',
        session_end_date: '2025-06-09',
        is_active: true,
        is_sold: false
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tickets', null, {});
  }
};
