const mongoose = require("mongoose");
const dev = require("./config");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(dev.db.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
  }
};
module.exports = connectDB;
