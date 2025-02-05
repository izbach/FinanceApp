const express = require("express");
const router = express.Router();
const { Employee } = require("../models");
const bcrypt = require("bcrypt");

// router.get("/", async (req, res) => {
//   const listOfAccounts = await Account.findAll();
//   res.json(listOfAccounts);
// });

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Employee.create({
      email: email,
      password: hash,
    });
  });
  res.json("SUCCESS");
});

module.exports = router;
