const Todo = require("../models/Todo");

async function editTodoController(req, res) {
  try {
    const { title } = req.body;
    const todoId = req.params.id;
    const todoExists = await Todo.findById(todoId);

    if (todoExists) {
      Todo.findByIdAndUpdate(todoId, { title: title }).then(() => {
        res.status(201).send("Updated Successfully");
      });
    } else {
      res.send({ message: "todo not exists" });
    }
  } catch (error) {
    res.status("Something went wrong");
  }
}

module.exports = editTodoController;
