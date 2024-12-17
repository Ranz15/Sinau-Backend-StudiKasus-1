// 3 Model : User, Reservation, Restaurant
const { Reservation, Users, Restaurant } = require("../models/index");

const getAllReservation = async (req, res) => {
  try {
    const reservations = await Reservation.findAll({
      attributes: ["id", "name", "number_of_guest", "user_id", "restaurant_id"],
      include: [
        {
          model: Users,
          attributes: ["name", "email"],
        },
        {
          model: Restaurant,
          attributes: [
            "name",
            "address",
            "phone_number",
            "email",
            "description",
          ],
        },
      ],
    });
    res.status(200).json({ message: "Success", data: reservations });
  } catch (error) {
    console.error(error);
  }
};

const createReservation = async (req, res) => {
  try {
    const { name, number_of_guest, user_id, restaurant_id } = req.body;

    // Validate request body
    if (!name || !number_of_guest || !user_id || !restaurant_id) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }

    // Validate number of guests
    if (typeof number_of_guest !== "number" || number_of_guest <= 0) {
      return res
        .status(400)
        .json({ message: "Number of guests must be a positive integer" });
    }

    // Validate user ID
    if (typeof user_id !== "number" || user_id <= 0) {
      return res
        .status(400)
        .json({ message: "User ID must be a positive integer" });
    }

    // Validate restaurant ID
    if (typeof restaurant_id !== "number" || restaurant_id <= 0) {
      return res
        .status(400)
        .json({ message: "Restaurant ID must be a positive integer" });
    }

    // Validate restaurant existence
    const restaurant = await Restaurant.findOne({
      where: { id: restaurant_id },
    });
    if (!restaurant) {
      return res
        .status(404)
        .json({ message: `Restaurant with ID ${restaurant_id} not found` });
    }

    // Validate user existence
    const user = await Users.findOne({ where: { id: user_id } });
    if (!user) {
      return res
        .status(404)
        .json({ message: `User with ID ${user_id} not found` });
    }

    // Create reservation
    try {
      const newReservation = await Reservation.create({
        name: name,
        number_of_guest: number_of_guest,
        user_id: user_id,
        restaurant_id: restaurant_id,
      });
      res.status(200).json({ message: "Success", data: newReservation });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error creating reservation" });
    }
  } catch (error) {
    console.error(error);
  }
};

const updateReservation = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, number_of_guest, user_id, restaurant_id } = req.body;

    const updatedReservation = await Reservation.update(
      {
        name: name,
        number_of_guest: number_of_guest,
        user_id: user_id,
        restaurant_id: restaurant_id,
      },
      { where: { id: id } }
    );

    res.status(200).json({ message: "Success", data: updatedReservation });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAllReservation,
  createReservation,
  updateReservation,
};
