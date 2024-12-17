const express = require("express");
const router = express.Router();

const {
  getAllReservation,
  createReservation,
  updateReservation,
} = require("../controllers/reservationController");

router.get("/reservations", getAllReservation);
router.post("/reservations", createReservation);
router.patch("/reservations/:id", updateReservation);

module.exports = router;
