// createTodoController

const Todo = require("../models/Todo");

async function createTodoController(req, res) {
  // console.log(req.body);
  try {
    const { title } = req.body;
    if (!title) {
      res.status(401).json({
        success: false,
        message: "Please enter title of Todo",
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
        title: req.body.title, // title is compulsory, and tasks can be added later
      });
      const createdNewTodo = await newTodo.save();
      res.status(201).json(createdNewTodo);
    }
  } catch (error) {
    // console.log(error);
    res.status("Something went wrong");
  }

  // try catch
  // check if title is empty
  // there should be status code
}

module.exports = createTodoController;
