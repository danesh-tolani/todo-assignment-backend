// createTodoController

const Todo = require("../models/Todo");

// in the request we are getting an object {title, tasks}
async function createTodoController(req, res) {
  try {
    const { title } = req.body;
    if (!title) {
      res.status(401).json({
        success: false,
        message: "Please enter Todo",
      });
    }

    const todoExists = await Todo.findOne({ title });
    if (todoExists) {
      res.status(400).json({
        success: false,
        message: "Todo already exists",
      });
    } else {
      const newTodo = new Todo({
        title: req.body.title,
        tasks: req.body.tasks, // title is compulsory, and tasks can be added later
      });
      const createdNewTodo = await newTodo.save();
      res.status(201).json(createdNewTodo);
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = createTodoController;
