const User = require("../models/userModel");
const RefreshToken = require("../models/refreshTokenModel");
const bcrypt = require("bcryptjs");
const {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} = require("../utils/token");

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Authentication failed. Username does not exist" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res
        .status(401)
        .json({ message: "Authentication failed. Password does not match" });
    }

    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    await RefreshToken.create({
      user: user._id,
      token: refreshToken,
    });

    res.status(200).json({
      _id: user.id,
      username: user.username,
      accessToken,
      refreshToken,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const refreshToken = async (req, res) => {
  const { token: refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(401).json({ message: "Refresh Token is required" });
  }

  if (!(await RefreshToken.findOne({ token: refreshToken }))) {
    return res
      .status(403)
      .json({ message: "Refresh token is not in database" });
  }

  try {
    const decoded = verifyRefreshToken(refreshToken);
    const userId = decoded.id;
    const newAccessToken = generateAccessToken(userId);

    res.json({
      accessToken: newAccessToken,
    });
  } catch (error) {
    return res.status(403).json({ message: "Invalid Refresh Token" });
  }
};

const deleteRefreshToken = async (req, res) => {
  const tokenToDelete = req.body.token;
  console.log("Token to delete:", tokenToDelete);

  try {
    const result = await RefreshToken.deleteOne({ token: tokenToDelete });
    console.log("Delete operation result:", result);

    if (result.deletedCount === 0) {
      // No document found with the token, handle accordingly
      return res.status(404).send("Token not found");
    }

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { login, refreshToken, deleteRefreshToken };
