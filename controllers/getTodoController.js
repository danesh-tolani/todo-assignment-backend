const Todo = require("../models/Todo");

async function getTodoController(req, res) {
  // console.log(req.params.id);
  try {
    const { id } = req.params; // what variable name is passed in the paras same should be used while destructuring
    const allTodos = await Todo.findById(id);
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

module.exports = getTodoController;
