const challengeRouter = require("../app/challenge/challenge.route");

const routes = (app) => {
  app.use("/api/challenge", challengeRouter);
};

module.exports = routes;