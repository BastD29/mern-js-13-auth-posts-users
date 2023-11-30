const express = require("express");
const router = express.Router();

const {
  login,
  refreshToken,
  deleteRefreshToken,
} = require("../controllers/authController");

router.post("/login", login);
router.post("/refreshToken", refreshToken);
router.delete("/logout", deleteRefreshToken);

module.exports = router;
