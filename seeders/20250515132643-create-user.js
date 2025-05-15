'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users', [
      {
        uid: '3CxJWJcxryPrkDzVGemGXKJCVLi1',
        email: 'alpsosial@gmail.com',
        full_name: 'Agung Laksono Putra',
        phone_number:  '081646909822',
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
