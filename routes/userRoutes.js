const express = require("express");
const router = express.Router();

const {
  getAllUser,
  getProfile,
  updateProfile,
  getAllRestaurant,
} = require("../controllers/userController");

// const verifyToken = require("../middleware/verifyToken");

router.get("/users", getAllUser);
router.post("/users/:id", getProfile);
router.patch("/users/:id", updateProfile);
router.get("/users/food", getAllRestaurant);

module.exports = router;
