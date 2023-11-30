const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
// const { generateAccessToken, generateRefreshToken } = require("../utils/token");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      username,
      password: hashedPassword,
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// const loginUser = async (req, res) => {
//   const { username, password } = req.body;

//   if (!username || !password) {
//     return res
//       .status(400)
//       .json({ message: "Username and password are required" });
//   }

//   try {
//     const user = await User.findOne({ username });
//     if (!user) {
//       return res
//         .status(401)
//         .json({ message: "Authentication failed. Username does not exist" });
//     }

//     const isPasswordMatch = await bcrypt.compare(password, user.password);
//     if (!isPasswordMatch) {
//       return res
//         .status(401)
//         .json({ message: "Authentication failed. Password does not match" });
//     }

//     res.status(200).json({
//       _id: user.id,
//       username: user.username,
//       accessToken: generateAccessToken(user._id),
//       refreshToken: generateRefreshToken(user._id),
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

module.exports = {
  getUsers,
  createUser,
  // loginUser,
};
