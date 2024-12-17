const db = require("../config/database");

const testKoneksi = async () => {
  try {
    await db.authenticate();
    console.log("Database connected...");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = testKoneksi;
