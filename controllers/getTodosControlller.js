// we want to get all the todos
const Todo = require("../models/Todo");

async function getTodosController(req, res) {
  try {
    const todos = await Todo.find().sort({ updatedAt: -1 }); // if we don't provide any parameter to .find() it will give all the documents. // .sort({}) sorts the documents on the basis of the variable that we pass as an argument and returns sorted documents
    if (!todos) {
      res.status(401).json({
        success: false,
        message: "Could not fetch the todos",
      });
    } else {
      res.status(201).json(todos);
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = getTodosController;
