"use strict";
const { testAccountsFactory } = require("./factories/accountsTestData");
const { testTransactionsFactory } = require("./factories/transactionsTestData");

const { Op } = require("sequelize");
const numberOfAccounts = 10;
const testSuffix = "**test**";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //TODO fix this so theres no need to turn one option on while the other is off
    async function fillTransactions() {
      for (const transaction of testTransactionsFactory(
        100,
        numberOfAccounts,
        testSuffix
      )) {
        await queryInterface.bulkInsert("transactions", [transaction]);
      }
    }
    var loops = 0;
    for (const account of testAccountsFactory(numberOfAccounts, testSuffix)) {
      await queryInterface.bulkInsert("accounts", [account]);
      loops += 1;
      if (loops == numberOfAccounts) {
        await fillTransactions();
      }
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("transactions", {
      description: {
        [Op.like]: `%${testSuffix}`,
      },
    });
    await queryInterface.bulkDelete("accounts", {
      accountName: {
        [Op.like]: `%${testSuffix}`,
      },
    });
  },
};
