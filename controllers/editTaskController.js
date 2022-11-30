const Todo = require("../models/Todo");

async function editTaskController(req, res) {
  try {
    const { tasks } = req.body;
    const todoId = req.params.id;
    const todoExists = await Todo.findById(todoId);

    if (todoExists) {
      Todo.findByIdAndUpdate(todoId, { tasks: tasks }).then(() => {
        res.status(201).send("Updated Successfully");
      });
    } else {
      res.send({ message: "todo does not not exists" });
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = editTaskController;
