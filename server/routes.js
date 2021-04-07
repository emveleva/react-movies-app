const authController = require("./controllers/authController");
const movieController = require("./controllers/movieController");
const dashboardController = require("./controllers/dashboardController");

module.exports = (app) => {
  app.use("/", authController);
  app.use("/movies", movieController);
  app.use("/dashboard", dashboardController);
  app.get("*", (req, res) => {
    res.render("404");
  });
};
