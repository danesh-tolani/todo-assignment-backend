require("dotenv").config();
const User = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function createUserController(req, res) {
  try {
    const { firstname, lastname, email, password } = req.body;

    /* Validation 1: If all the required fields are present or not */
    if (!firstname || !lastname || !email || !password) {
      res.status(401).json({
        success: false,
        message: "Please enter all details",
        body: req.body,
      });
    }

    /* Validation 2: If the user already exists, search by email because email is unique property */
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(401).json({
        success: false,
        message: "User Already Exists",
        body: req.body,
      });
    } else {
      /* Once the validations are passed we can proceed further */
      /* Step1: Encrypt the password which will get stored in DB (bcrypt) */
      const myEncryptPassword = await bcrypt.hash(password, 10);

      /* If all the validations are passed create a user in DB by .save() method */
      const user = new User({
        firstname,
        lastname,
        email,
        password: myEncryptPassword,
      });

      const createdUser = await user.save();

      /* Step2: Create token and send it to the user (JWT) */
      /* We are creating token based on unique item, when user is created in DB, _id is automatically generated */
      const token = jwt.sign({ id: createdUser._id, email }, process.env.SECRET, { expiresIn: "2h" });

      /* We are sending token to the user and the password should be null */
      user.token = token;
      user.password = "";

      res.status(201).json({
        success: true,
        message: "User Created",
        createdUser,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = createUserController;
