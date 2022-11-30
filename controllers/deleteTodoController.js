const Todo = require("../models/Todo");

async function deleteTodoController(req, res) {
  try {
    const todoID = req.params.id;
    console.log(todoID);
    const deletedTodo = await Todo.findByIdAndDelete(todoID);
    if (!deletedTodo) {
      res.status(401).json({
        success: false,
        message: "Could not delete the Todo",
      });
    } else {
    }
    res.status(201).json({
      success: true,
      message: "Todo deleted",
      deletedTodo,
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = deleteTodoController;
