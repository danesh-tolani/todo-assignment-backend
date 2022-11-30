const User = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    /* Validation 1: If email and password are passed*/
    if (!email || !password) {
      res.status(401).json({
        success: false,
        message: "Please enter email and password",
      });
    }

    /* Validation 2: Check if email is present in DB or not */
    const user = await User.findOne({ email });

    if (!user) {
      res.status(401).json({
        success: false,
        message: "User does not exists, please enter valid email",
      });
    } else {
      /* if user exists we will match the password entered by the user with the password in DB*/
      if (user && (await bcrypt.compare(password, user.password))) {
        /* Create a token */
        const token = jwt.sign({ id: user._id, email }, process.env.SECRET, { expiresIn: "2h" });

        user.password = "";
        user.token = token;
      } else {
        res.status(401).json({
          success: false,
          message: "incorrect password",
        });
      }

      // setting options for cookie
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true, // by setting httpOnly we mean that cookie can be modified through http request only
      };

      /* Here we are saving cookie in browser cookies */
      res.status(201).cookie("token", user.token, options).json({
        success: true,
        message: "Logged in successfully",
        user,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = loginController;
