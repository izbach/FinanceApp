const { faker } = require("@faker-js/faker");

const testAccountsFactory = function* (number, testSuffix) {
  //   const accountList = [
  //     ["Rent", "Expense"],
  //     ["Utilities", "Expense"],
  //     ["Salary", "Income"],
  //     ["Interest", "Income"],
  //     ["Travel", "Expense"],
  //     ["Meals and Entertainment", "Expense"],
  //   ];
  const array = Array(number)
    .fill(1)
    .map((n, i) => n + i);

  const expense = ["Income", "Expense"];
  for (const item in array) {
    yield {
      accountName: `${faker.food.fruit()} ${testSuffix}`,
      accountType: expense[(faker.datatype.boolean(0.8) && 1) || 0],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }
};
module.exports = {
  testAccountsFactory,
};
