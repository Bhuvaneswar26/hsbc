'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     * 
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    //adding id to user table
    await queryInterface.addColumn('Users', 'id', {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    });

   

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    
    //removing id from user table
    await queryInterface.removeColumn('Users', 'id');

  }
};
