const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

// Routers
const transactionRouter = require("./routes/Transactions");
app.use("/transactions", transactionRouter);
const accountRouter = require("./routes/Accounts");
app.use("/accounts", accountRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server listening on port 3001");
  });
});
