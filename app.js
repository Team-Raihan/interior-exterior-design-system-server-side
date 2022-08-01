const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const colors = require("colors"); // this package using only for development console coloring text.
const { errorHandler, notFound } = require("./middleware/errorMiddleware");
const app = express();
app.use(cors());
dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// connect to mongodb database
connectDB();

app.get("/", (req, res) => {
  res.status(200).send("Everything okay. I am from chat application.");
});
// error handling
app.use(notFound);
app.use(errorHandler);
module.exports = app;
