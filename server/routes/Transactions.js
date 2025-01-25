const express = require("express");
const router = express.Router();
const { Transaction, sequelize } = require("../models");
const { Op, QueryTypes } = require("sequelize");

router.get("/", async (req, res) => {
  const listOfTransactions = await sequelize.query(
    'SELECT transactions.id, transactions.description, transactions.date, transactions.amount, accounts.accountName AS accountName FROM transactions JOIN accounts ON "accounts"."id" = "transactions"."AccountId"',
    {
      type: QueryTypes.SELECT,
    }
  );
  res.json(listOfTransactions);
});
router.get("/by-date/:dateFrom/:dateTo", async (req, res) => {
  const dateFrom = req.params.dateFrom.toString();
  const dateTo = req.params.dateTo.toString();

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
