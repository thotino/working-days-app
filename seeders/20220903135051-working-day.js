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
   await queryInterface.bulkInsert('WorkingDay', [{
    weekDay: 'Monday',
    workingDate: new Date(),
    isWorking: true
  },
  {
    weekDay: 'Tuesday',
    workingDate: new Date(),
    isWorking: true
  },
  {
    weekDay: 'Wednesday',
    workingDate: new Date(),
    isWorking: false
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
