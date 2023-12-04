const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    index: true,
  },
  password: String,
});

module.exports = mongoose.model("User", userSchema);
