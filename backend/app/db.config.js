module.exports = {
  HOST: "localhost",
  USER: "arina",
  PASSWORD: "1234",
  DB: "food",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
