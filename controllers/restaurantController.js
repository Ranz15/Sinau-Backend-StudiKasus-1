const { Restaurant } = require("../models/index");

const createRestaurant = async (req, res) => {
  try {
    const { name, address, phone_number, email, description } = req.body;

    const newRestaurant = await Restaurant.create({
      name: name,
      address: address,
      phone_number: phone_number,
      email: email,
      description: description,
    });

    res.status(200).json({ message: "Success", data: newRestaurant });
  } catch (error) {
    console.error(error);
  }
};

const updateRestaurant = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, address, phone_number, email, description } = req.body;

    const updatedRestaurant = await Restaurant.update(
      {
        name: name,
        address: address,
        phone_number: phone_number,
        email: email,
        description: description,
      },
      { where: { id: id } }
    );

    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  createRestaurant,
  updateRestaurant,
};
