const express = require("express");
const router = express.Router();
const createTodoController = require("../controllers/createTodoController");
const getTodosController = require("../controllers/getTodosControlller");
const getTodoController = require("../controllers/getTodoController");
const deleteTodoController = require("../controllers/deleteTodoController");
const createTaskController = require("../controllers/createTaskController");
const editTaskController = require("../controllers/editTaskController");
const editTodoController = require("../controllers/editTodoController");
const searchTodosController = require("../controllers/searchTodosController");

router.post("/createTodo", createTodoController);
router.get("/getTodos", getTodosController);
router.get("/getTodos/:id", getTodoController);
router.delete("/deleteTodo/:id", deleteTodoController);
router.post("/addTask/:id", createTaskController);
router.put("/updateTask/:id", editTaskController);
router.put("/updateTodo/:id", editTodoController);
router.post("/searchTodos", searchTodosController);

module.exports = router;
