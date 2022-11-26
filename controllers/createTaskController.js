const Todo = require("../models/Todo");

async function createTaskController(req, res) {
  try {
    const { id } = req.params;
    const reqTodo = await Todo.findById(id);
    if (!reqTodo) {
      return res.status(400).json({
        success: false,
        message: "No todo exists",
      });
    } else {
      const { task } = req.body;
      reqTodo.tasks.push(task);
      await reqTodo.save(); // we are saving on todo and not Todo because in todo we are saving everything from Todo
      res.status(210).json({
        success: true,
        message: "Task Added",
        reqTodo,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = createTaskController;
