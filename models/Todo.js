// import mongoose from "mongoose";

const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const TodoSchema = new mongoose.Schema(
  {
    // title: String
    title: {
      type: String,
      required: true,
    },
    tasks: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todos", TodoSchema);
// export default TodoModel;
// module.exports
