"use strict";
const { testAccountsFactory } = require("./factories/accountsTestData");

const { Op } = require("sequelize");
const config = require(__dirname + "/config.json");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    for (const account of testAccountsFactory(
      config.numberOfAccounts,
      config.testSuffix
    )) {
      await queryInterface.bulkInsert("accounts", [account]);
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("accounts", {
      accountName: {
        [Op.like]: `%${config.testSuffix}`,
      },
    });
  },
};
