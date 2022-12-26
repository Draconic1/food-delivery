module.exports = (sequelize, Sequelize) => {
  const Model = sequelize.define("food", {
    name: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.DOUBLE,
    },
    weight: {
      type: Sequelize.STRING,
    },
    image: {
      type: Sequelize.STRING,
    },
    food_type_id: {
      type: Sequelize.INTEGER,
      references: sequelize.food_type,
    },
  });

  return Model;
};
