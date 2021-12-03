const challengeRouter = require("../app/challenge/challenge.route");
const participationRouter = require("../app/participation/participation.route");
const customerRouter = require("../app/customer/customer.route");
const restaurantRouter = require("../app/restaurant/restaurant.route");

const routes = (app) => {
  app.use("/api/challenge", challengeRouter);
  app.use("/api/participation", participationRouter);
  app.use("/api/customer", customerRouter);
  app.use("/api/restaurant", restaurantRouter);
};

module.exports = routes;