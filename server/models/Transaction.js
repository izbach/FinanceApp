module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define(
    "Transaction",
    {
      description: {
        type: DataTypes.STRING,
      },
      date: {
        type: DataTypes.DATEONLY,
      },
      amount: {
        type: DataTypes.DECIMAL(10, 2),
      },
    },
    {
      tableName: "transactions",
    }
  );
  return Transaction;
};
