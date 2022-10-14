require("dotenv").config();
const dev = {
  app: {
    port: process.env.PORT || 5000,
  },
  db: {
    DB_URL: process.env.DB_URL,
  },
};

module.exports = dev;
