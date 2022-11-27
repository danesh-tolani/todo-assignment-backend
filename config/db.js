require("dotenv").config();
const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((connection) => {
      console.log(`Connected to the DB: ${connection.connection.host}`);
    })
    .catch((error) => console.log(error));
};

module.exports = connectToDb;
