module.exports = (app) => {
  const controller = require("../controllers/food.controller.js");
  const authJwt = require("../middleware/authJwt");

  const router = require("express").Router();

  // Create new Food
  router.post("/", [authJwt.verifyToken, authJwt.isAdmin], controller.create);

  // Retrieve all Foods
  router.get("/", controller.findAll);

  // Retrieve Foods by food_type
  router.get("/food_type/:food_type_id", controller.findAllByFoodType);

  // Retrieve a single Food with id
  router.get("/:id", controller.findOne);

  // Update Food with id
  router.put("/:id", [authJwt.verifyToken, authJwt.isAdmin], controller.update);

  // Delete Food with id
  router.delete(
    "/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.delete
  );

  // Delete all Foods
  router.delete(
    "/",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.deleteAll
  );

  app.use("/api/food", router);
};
