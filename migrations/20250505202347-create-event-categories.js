'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('event_categories', {
      event_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
            model: 'events',
            key: 'id'
        }
      },
      category_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
            model: 'categories',
            key: 'id'
        }
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('event_categories');
  }
};
