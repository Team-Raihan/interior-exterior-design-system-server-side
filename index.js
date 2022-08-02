const app = require("./app");

const config = require("./config/config");

const port = config.app.port;

app.listen(port, () => {
  console.log(
    "Server Started on".yellow.bold,
    `https://localhost:${port}`.blue.bold
  );
});
