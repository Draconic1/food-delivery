const db = require("../models");
const Food_Type = db.food_type;
const Op = db.Sequelize.Op;

// Create and Save a new Food_Type
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Food_Type
  const obj = {
    name: req.body.name,
    image: req.body.image,
  };

  // Save Food_Type in the database
  Food_Type.create(obj)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Food_Type.",
      });
    });
};

// Retrieve all Food_Type from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Food_Type.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Food_Types.",
      });
    });
};

// Find a single Food_Type with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Food_Type.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Food_Type with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Food_Type with id=" + id,
      });
    });
};

// Update a Food_Type by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Food_Type.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Food_Type was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Food_Type with id=${id}. Maybe Food_Type was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Food_Type with id=" + id,
      });
    });
};

// Delete a Food_Type with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Food_Type.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Food_Type was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Food_Type with id=${id}. Maybe Food_Type was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Food_Type with id=" + id,
      });
    });
};

// Delete all Food_Type from the database.
exports.deleteAll = (req, res) => {
  Food_Type.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Food_Types were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Food_Types.",
      });
    });
};
