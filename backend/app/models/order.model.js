module.exports = (sequelize, Sequelize) => {
  const Model = sequelize.define("order", {
    status: {
      type: Sequelize.INTEGER,
    },
    paid_date:{
      type: Sequelize.DATE,
      defaultValue: null,
    },
    get_date:{
      type: Sequelize.DATE,
      defaultValue: null,
    },
    food_id: {
      type: Sequelize.INTEGER,
      references: sequelize.food,
    },
    user_id: {
      type: Sequelize.INTEGER,
      references: sequelize.users,
    },
  });

  Model.statusEnum = [
    { val: 1, name: "В корзине" },
    { val: 2, name: "Оплачен" },
    { val: 3, name: "Передан в доставку" },
    { val: 4, name: "Доставлен" },
  ];

  return Model;
};
