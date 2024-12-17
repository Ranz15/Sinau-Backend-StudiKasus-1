const express = require("express");
const router = express.Router();

const {
  registerUser,
  Login,
} = require("../controllers/loginController");

// const verifyToken = require("../middleware/verifyToken");

// router.get("/", verifyToken, getAllUser);
router.post("/register", registerUser);
router.post("/login", Login);

module.exports = router;
