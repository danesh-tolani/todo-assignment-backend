const Todo = require("../models/Todo");

async function editTodoController(req, res) {
  try {
    const { title } = req.body;
    const todoId = req.params.id;
    const todoExists = await Todo.findById(todoId);

    if (todoExists) {
      const updTodo = await Todo.findByIdAndUpdate(todoId, { title: title });
      res.status(201).json({ success: true, message: "title updated", updTodo });
    } else {
      res.send({ message: "todo not exists" });
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = editTodoController;
