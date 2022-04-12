const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const pizza = require("./routes/Pizza");
const cors = require("cors");
const users = require("./routes/users");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/pizzas", pizza);
app.use("/api/profile", users);

app.listen("5080", () => {
  console.log("Backend is Running");
});
