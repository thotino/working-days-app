'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Employee', [
    {email: 'john-doe@domain.com', firstName: 'John',  lastName: 'DOE'},
  {email: 'log_w@domain.com', firstName: 'Logan',  lastName: 'WOLVERINE'},
  {email: 'john-connor@domain.com', firstName: 'John',  lastName: 'CONNOR'}
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
