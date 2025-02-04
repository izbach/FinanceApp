"use strict";
const { testEmployeeFactory } = require("./factories/employeeTestData");

const { Op } = require("sequelize");
const config = require(__dirname + "/config.json");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    for (const employee of testEmployeeFactory(
      config.numberOfEmployees,
      config.testSuffix
    )) {
      await queryInterface.bulkInsert("employees", [employee]);
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("employees", {
      employeeLastName: {
        [Op.like]: `%${config.testSuffix}`,
      },
    });
  },
};
