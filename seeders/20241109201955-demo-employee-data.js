'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Seed employee hierarchy data
    await queryInterface.bulkInsert('Employees', [
      {
        id: 1,
        name: "CTO Name",
        positionId: 1,
        positionName: "CTO",
        parentId: null, // top of hierarchy
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: "Senior Software Engineer 1",
        positionId: 2,
        positionName: "Senior software eng",
        parentId: 1, // reports to CTO
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: "Software Engineer 1",
        positionId: 3,
        positionName: "Software eng",
        parentId: 2, // reports to Senior Software Engineer 1
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: "Junior Software Engineer 1",
        positionId: 4,
        positionName: "Junior software eng",
        parentId: 3, // reports to Software Engineer 1
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: "Senior Software Engineer 2",
        positionId: 2,
        positionName: "Senior software eng",
        parentId: 1, // reports to CTO
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        name: "Software Engineer 2",
        positionId: 3,
        positionName: "Software eng",
        parentId: 5, // reports to Senior Software Engineer 2
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    // Delete all data from Employees table
    await queryInterface.bulkDelete('Employees', null, {});
  }
};
