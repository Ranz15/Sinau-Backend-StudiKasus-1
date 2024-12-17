const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/database");

const Reservation = db.define(
  "reservation",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number_of_guest: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    restaurant_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Reservation;
