const express = require("express");
const router = express.Router();

const {
  createRestaurant,
  updateRestaurant,
} = require("../controllers/restaurantController");

// const verifyToken = require("../middleware/verifyToken");

router.post("/restaurants", createRestaurant);
router.patch("/restaurants/:id", updateRestaurant);

module.exports = router;
