const express = require("express");
const router = express.Router();
const { Transaction, sequelize } = require("../models");
const { Op, QueryTypes } = require("sequelize");

router.get("/", async (req, res) => {
  const listOfTransactions = await Transaction.findAll({
    attributes: {
      include: [
        [
          Op.literal(`(
            SELECT account.accountName AS accountName
            FROM accounts AS account
            LEFT JOIN "transactions" AS "transaction"
            ON "account"."id" = "transaction"."AccountId"
          )`),
          "accountName",
        ],
      ],
      exclude: ["createdAt", "updatedAt", "AccountId"],
    },
  });
  res.json(listOfTransactions);
});
router.get("/by-date/:dateFrom/:dateTo", async (req, res) => {
  const dateFrom = req.params.dateFrom.toString();
  const dateTo = req.params.dateTo.toString();
  // const listOfTransactions = await Transaction.findAll({
  //   attributes: {
  //     include: [
  //       [
  //         Op.literal(`(
  //           SELECT account.accountName AS accountName
  //           FROM accounts AS account
  //           LEFT JOIN "transactions" AS "transaction"
  //           ON "account"."id" = "transaction"."AccountId"
  //         )`),
  //         "accountName",
  //       ],
  //     ],
  //     exclude: ["createdAt", "updatedAt", "AccountId"],
  //   },
  //   where: {
  //     date: {
  //       [Op.lt]: ["2025-01-01"],
  //     },
  //   },
  // });
  const listOfTransactions = await sequelize.query(
    'SELECT transactions.id, transactions.description, transactions.date, transactions.amount, accounts.accountName AS accountName FROM transactions JOIN accounts ON "accounts"."id" = "transactions"."AccountId" WHERE DATE(date) BETWEEN "' +
      dateFrom +
      '" AND "' +
      dateTo +
      '"',
    {
      type: QueryTypes.SELECT,
    }
  );
  res.json(listOfTransactions);
});

router.post("/", async (req, res) => {
  const post = req.body;
  await Transaction.create(post);
  res.json(post);
});

module.exports = router;
