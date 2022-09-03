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
   await queryInterface.bulkInsert('Employees', [
    {
      email: 'john-doe@domain.com', 
      first_name: 'John',  
      last_name: 'DOE', 
      CompanyId: 1,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
  },
  {
    email: 'log_w@domain.com', 
    first_name: 'Logan',  
    last_name: 'WOLVERINE', 
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
    CompanyId: 1
},
  {
    email: 'john-connor@domain.com', 
    first_name: 'John',  
    last_name: 'CONNOR', 
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
    CompanyId: 1
}
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
