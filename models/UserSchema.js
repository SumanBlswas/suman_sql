module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define("Employee", {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: DataTypes.INTEGER,
  });
  return Employee;
};
