require("dotenv").config();
const express = require("express");
const connectToDb = require("./config/db");
const app = express();
const todoRoutes = require("./routes/TodoRoutes");
const userRoutes = require("./routes/UserRoutes");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(cors());

// Connect to DB
connectToDb();

// todo routes
app.use("/", todoRoutes);

// user routes
// by default all routes for user will have "/api/user" as prefix
app.use("/api/user", userRoutes);

module.exports = app;
