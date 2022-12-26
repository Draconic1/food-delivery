const db = require("../models");
const Food = db.food;
const Op = db.Sequelize.Op;

// Create and Save a new Food
exports.create = (req, res) => {
  // Validate request
  if (!req.body.food_type_id) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Food
  const obj = {
    name: req.body.name,
    price: req.body.price,
    weight: req.body.weight,
    image: req.body.image,
    food_type_id: req.body.food_type_id,
  };

  // Save Food in the database
  Food.create(obj)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Food.",
      });
    });
};

// Retrieve all Food from the database.
exports.findAll = (req, res) => {
  if (req.query.hasOwnProperty(`name`) && !req.query.name) {
    res.status(404).send({
      message: `Cannot find Foods with empty name.`,
    });
    return;
  }

  const food_name = req.query.name
  var condition = food_name ? { name: { [Op.like]: `%${food_name}%` } } : null;


  Food.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Foods.",
      });
    });
};


// Find a single Food with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Food.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Food with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Food with id=" + id,
      });
    });
};

// Update a Food by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Food.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Food was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Food with id=${id}. Maybe Food was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Food with id=" + id,
      });
    });
};

// Delete a Food with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Food.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Food was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Food with id=${id}. Maybe Food was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Food with id=" + id,
      });
    });
};

// Delete all Food from the database.
exports.deleteAll = (req, res) => {
  Food.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Food_Types were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Food.",
      });
    });
};

// Find Foods by food_type
exports.findAllByFoodType = (req, res) => {
  const food_type = req.params.food_type_id;

  Food.findAll({ where: { food_type_id: food_type } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Food.",
      });
    });
};
