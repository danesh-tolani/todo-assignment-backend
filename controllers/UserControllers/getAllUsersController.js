const User = require("../../models/User");

async function getAllUsersController(req, res) {
  try {
    const users = await User.find();
    res.status(201).json({
      success: true,
      users,
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = getAllUsersController;
