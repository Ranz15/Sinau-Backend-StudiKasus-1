const { parse } = require("dotenv");
const { Users, Restaurant } = require("../models/index");

const getAllUser = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: ["id", "name", "email"],
    });
    res.status(200).json({ message: "Success", data: users });
  } catch (error) {
    console.error(error);
  }
};

const getProfile = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const user = await Users.findOne({
      where: { id: id },
      attributes: ["id", "name", "email"],
    });

    res.status(200).json({ message: "Success", data: user });
  } catch (error) {
    console.error(error);
  }
};

const updateProfile = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;

    const user = await Users.update(
      { name: name, email: email },
      { where: { id: id } }
    );

    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.error(error);
  }
};

const getAllRestaurant = async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll({
      attributes: [
        "id",
        "name",
        "address",
        "phone_number",
        "email",
        "description",
      ],
    });
    res.status(200).json({ message: "Success", data: restaurants });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getAllUser, getProfile, updateProfile, getAllRestaurant };
