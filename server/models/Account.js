module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define(
    "Account",
    {
      accountName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      accountType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "accounts",
    }
  );
  Account.associate = (models) => {
    Account.hasMany(models.Transaction, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Account;
};
