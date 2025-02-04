const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");

const testEmployeeFactory = function* (number, testSuffix) {
  const states = ["inactive", "active"];
  const permiss = ["admin", "employee"];
  const array = Array(number)
    .fill(1)
    .map((n, i) => n + i);
  pword = bcrypt.hashSync("password", 10);
  for (const item in array) {
    const firstName = faker.person.firstName();
    const lastName = `${faker.person.lastName()} ${testSuffix}`;

    yield {
      employeeFirstName: firstName,
      employeeLastName: lastName,
      employeeStatus: states[(faker.datatype.boolean(0.8) && 1) || 0],
      email: faker.internet.email({ firstName, lastName }),
      password: pword,
      permissions: permiss[(faker.datatype.boolean(0.8) && 1) || 0],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }
};
module.exports = {
  testEmployeeFactory,
};
