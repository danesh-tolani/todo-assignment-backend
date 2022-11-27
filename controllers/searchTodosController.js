const Todo = require("../models/Todo");

async function searchTodosController(req, res) {
  try {
    const { find } = req.query; // what variable name is passed in the paras same should be used while destructuring
    const allTodos = await Todo.find({ $or: [{ title: new RegExp(find, "i") }, { tasks: new RegExp(find, "i") }] });
    // console.log(allTodos);
    if (!allTodos) {
      res.status(410).json({
        success: false,
        message: "Could not find the todo",
      });
    } else {
      res.status(201).json(allTodos);
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = searchTodosController;
