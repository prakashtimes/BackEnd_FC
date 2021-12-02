const mongoose = require("mongoose");
require("dotenv").config();
let dbUrl = process.env.MONGO_URL;

module.exports = async () => {
  await mongoose
    .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
};