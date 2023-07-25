module.exports = (sequelize, DataTypes) => {
  const blog = sequelize.define("blog", {
    author: DataTypes.STRING,
    title: DataTypes.STRING,
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return blog;
};
