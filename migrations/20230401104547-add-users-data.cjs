'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        user_id: 200107114,
        firstName: 'John',
        lastName: 'Galt',
        password: 'a12jjen34o29',
        role: 'admin'
      },
      {
        user_id: 200878192,
        firstName: 'John',
        lastName: 'Doe',
        password: 'a12jjen34o29',
        role: 'admin'
      },
      {
        user_id: 200107115,
        firstName: 'John',
        lastName: 'Gary',
        password: 'a12jjen34o29',
        role: 'admin'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
