require("dotenv").config();
const express = require("express");
const connectToDb = require("./config/db");
const app = express();
const todoRoutes = require("./routes/TodoRoutes");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

connectToDb();
app.use("/", todoRoutes);
// app.get("/", (req, res) => {
//   res.send("Connection successful");
// });

module.exports = app;
