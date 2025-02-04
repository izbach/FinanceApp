module.exports = (sequelize, DataTypes) => {
  const HoursForm = sequelize.define(
    "HoursForm",
    {
      employeeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      payrollNumberId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ApprovalEmployeeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "hoursForms",
    }
  );
  return HoursForm;
};
