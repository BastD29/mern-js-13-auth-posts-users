const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  username: String,
  title: String,
});

module.exports = mongoose.model("Post", postSchema);
