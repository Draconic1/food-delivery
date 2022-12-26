module.exports = (app) => {
  const controller = require("../controllers/food_type.controller.js");
  const authJwt = require("../middleware/authJwt");

  const router = require("express").Router();

  // Create a new Food_type
  router.post("/", [authJwt.verifyToken, authJwt.isAdmin], controller.create);

  // Retrieve all Food_types
  router.get("/", controller.findAll);

  // Retrieve a single Food_type with id
  router.get("/:id", controller.findOne);

  // Update a Food_type with id
  router.put("/:id", [authJwt.verifyToken, authJwt.isAdmin], controller.update);

  // Delete a Food_type with id
  router.delete(
    "/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.delete
  );

  // Delete all Food_types
  router.delete(
    "/",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.deleteAll
  );

  app.use("/api/food_type", router);
};
