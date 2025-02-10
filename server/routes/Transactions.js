const express = require("express");
const router = express.Router();
const { Transaction, sequelize } = require("../models");
const { Op, QueryTypes } = require("sequelize");

const { isDateValid, subtractYears, dateStrFunc } = require(__dirname +
  "/../utils/CustomFunctions");

router.get("/", async (req, res) => {
  // try {
  const { dateFrom, dateTo, accountType, page } = req.query;
  var filter = "";
  var pages = " LIMIT 10";
  if (accountType + "" == "income") {
    filter = filter + ' AND accountType="Income"';
  } else if (accountType == "expense") {
    filter = filter + ' AND accountType="Expense"';
  }
  if (page == 0) {
    pages = "";
  } else if (page) {
    pages = " LIMIT 10 OFFSET " + (pagination - 1) * 10;
  }
  console.log(accountType);
  console.log(req);
  const dateString = dateStrFunc(dateFrom, dateTo);
  const listOfTransactions = await sequelize.query(
    "SELECT transactions.id, transactions.description, transactions.date," +
      " transactions.amount, accounts.accountName AS accountName, accounts.accountType AS accountType FROM " +
      'transactions JOIN accounts ON "accounts"."id" = "transactions"."AccountId"' +
      dateString +
      filter +
      " ORDER BY transactions.date desc" +
      pages,
    {
      type: QueryTypes.SELECT,
    }
  );
  res.json(listOfTransactions);
  // } catch (error) {
  //   res.status(500).send("Internal server error: ${error}");
  // }
});
router.get("/sum", async (req, res) => {
  // try {
  const { byAccount, dateFrom, dateTo, month, year, monthSort } = req.query;
  const dateString = dateStrFunc(dateFrom, dateTo);
  var filter = "";
  groupString = ' GROUP BY "month-year", "accountType"';
  if (monthSort == "false") {
    groupString = ' GROUP BY "accountType"';
  }
  if (byAccount == "true") {
    groupString = groupString + ", accountName";
  }

  if (month && year) {
    filter = filter + " AND month=" + month + " AND year=" + year;
  }
  const listOfTransactions = await sequelize.query(
    "SELECT " +
      "strftime('%m-%Y', date) AS 'month-year', CAST(strftime('%Y', date) AS INTEGER) AS 'year',CAST(strftime('%m', date) AS INTEGER) AS 'month', " +
      " ROUND(SUM(transactions.amount),2) AS 'sum', accounts.accountType AS accountType, accounts.accountName AS accountName FROM " +
      'transactions JOIN accounts ON "accounts"."id" = "transactions"."AccountId"' +
      dateString +
      filter +
      groupString +
      " ORDER BY year asc",
    {
      type: QueryTypes.SELECT,
    }
  );
  res.json(listOfTransactions);
  // } catch (error) {
  //   res.status(500).send("Internal server error: ${error}");
  // }
});

router.post("/", async (req, res) => {
  const transaction = req.body;
  await Transaction.create(transaction);
  res.json(transaction);
});

module.exports = router;
