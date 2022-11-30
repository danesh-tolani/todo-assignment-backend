const express = require("express");
const router = express.Router();
const createUserController = require("../controllers/UserControllers/createUserController");
const getAllUsersController = require("../controllers/UserControllers/getAllUsersController");
const loginController = require("../controllers/UserControllers/loginController");

router.get("/allUsers", getAllUsersController);
router.post("/register", createUserController);
router.post("/login", loginController);

module.exports = router;
