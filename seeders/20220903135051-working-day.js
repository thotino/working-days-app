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
   await queryInterface.bulkInsert('WorkingDays', [{
    week_day: 'Monday',
    working_date: new Date(),
    is_working: true,
    createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
  },
  {
    week_day: 'Tuesday',
    working_date: new Date(),
    is_working: true,
    createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
  },
  {
    week_day: 'Wednesday',
    working_date: new Date(),
    is_working: false,
    createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
  }])
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
