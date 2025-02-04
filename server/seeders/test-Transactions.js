"use strict";
const { testTransactionsFactory } = require("./factories/transactionsTestData");

const { Op } = require("sequelize");
const config = require(__dirname + "/config.json");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    for (const transaction of testTransactionsFactory(
      config.numberOfTransactions,
      config.numberOfAccounts,
      config.testSuffix
    )) {
      await queryInterface.bulkInsert("transactions", [transaction]);
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("transactions", {
      description: {
        [Op.like]: `%${config.testSuffix}`,
      },
    });
  },
};
