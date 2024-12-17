// models/index.js
const Users = require("./userModel");
const Restaurant = require("./restaurantModel");
const Reservation = require("./reservationModel");

// Define associations
Users.hasMany(Reservation, { foreignKey: "user_id" });
Reservation.belongsTo(Users, { foreignKey: "user_id" });

Restaurant.hasMany(Reservation, { foreignKey: "restaurant_id" });
Reservation.belongsTo(Restaurant, { foreignKey: "restaurant_id" });

module.exports = { Users, Restaurant, Reservation };
