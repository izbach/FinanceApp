const { faker } = require("@faker-js/faker");

const testTransactionsFactory = function* (
  number,
  numberOfAccounts,
  testSuffix
) {
  dates = faker.date.betweens({
    from: "2020-01-01",
    to: Date.now(),
    count: number,
  });

  for (const item in dates) {
    yield {
      description: `${faker.lorem.words(3)} ${testSuffix}`,
      AccountId: faker.number.int({ min: 1, max: numberOfAccounts }),
      date: dates[item].toISOString().split("T")[0],
      amount: faker.finance.amount(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }
};

module.exports = {
  testTransactionsFactory,
};
