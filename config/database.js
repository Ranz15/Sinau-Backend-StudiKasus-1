const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

// Inisialisasi Dotenv Database Info
const database = process.env.DATABASE_NAME;
const username = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;

const db = new Sequelize(database, username, password, {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
