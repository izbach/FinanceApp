module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define(
    "Employee",
    {
      employeeFirstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      employeeLastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      employeeStatus: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      permissions: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "employees",
    }
  );
  return Employee;
};
