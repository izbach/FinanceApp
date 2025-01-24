const express = require("express");
const router = express.Router();
const { Account } = require("../models");

router.get("/", async (req, res) => {
  const listOfAccounts = await Account.findAll();
  res.json(listOfAccounts);
});

router.post("/", async (req, res) => {
  const account = req.body;
  await Account.create(account);
  res.json(account);
});

module.exports = router;
