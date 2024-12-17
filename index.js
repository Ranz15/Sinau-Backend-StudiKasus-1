//  Inisialisasi Dotenv
require("dotenv").config();

// Inisialisasi Express
const express = require("express");

// Inisialisasi Body Parser
const bodyParser = require("body-parser");

// Inisialisasi PORT
const port = process.env.PORT || 3000;

// Insialisasi CORS
const cors = require("cors");

// Inisialisasi Cookie Parser
const cookieParser = require("cookie-parser");

// Call Express
const app = express();

// Middleware Section
app.use(cors());

// Fungsi agar backend dapat menerima cookie
app.use(cookieParser());

// Fungsi agar backend dapat menerima data json
app.use(bodyParser.json());

// Fungsi agar backend dapat menerima data url
app.use(bodyParser.urlencoded({ extended: true }));

// Fungsi untuk memanggil database
const testKoneksi = require("./config/CekKoneksi");

// Fungsi memanggil model
// const { Users } = require("./models/userModel");
// const {Restaurant} = require("./models/restaurantModel");

// Check Connection with Database (Sequelize)
testKoneksi();

// Inisialisasi Routes
const login = require("./routes/loginRoutes");
const user = require("./routes/userRoutes");
const restaurant = require("./routes/restaurantRoutes");
const reservation = require("./routes/reservationController");

// Login Routes Section
app.use(login);

// User Routes Section
app.use(user);

// Restaurant Routes Section
app.use(restaurant);

// Reservation Routes Section
app.use(reservation);

// Test Section
app.post("/test", (req, res) => {
  const data = req.body;
  res.status(200).json({
    msg: "success",
    data: data,
  });
});

// Listen App Port Section
app.listen(port, () => {
  console.log(`server berhasil dijalankan pada port http://localhost:${port}`);
});
