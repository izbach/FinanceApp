#!/bin/bash

sequelize-cli db:seed --seed test-Accounts.js
sequelize-cli db:seed --seed test-Transactions.js
sequelize-cli db:seed --seed test-Employees.js