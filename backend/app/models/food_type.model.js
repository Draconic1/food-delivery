module.exports = (sequelize, Sequelize) => {
  const Model = sequelize.define("food_type", {
    name: {
      type: Sequelize.STRING,
    },
    image: {
      type: Sequelize.STRING,
    }
  });

  return Model;
};
