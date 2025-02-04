module.exports = (sequelize, DataTypes) => {
  const HoursLog = sequelize.define(
    "HoursLog",
    {
      Date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      HoursFrom: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      HoursTo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "HoursLogs",
    }
  );

  return HoursLog;
};
