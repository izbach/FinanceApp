#!/bin/bash

sequelize-cli db:seed:undo --seed test-Employees.js
sequelize-cli db:seed:undo --seed test-Transactions.js
sequelize-cli db:seed:undo --seed test-Accounts.js