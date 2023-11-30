const Post = require("../models/postModel");

const getPosts = async (req, res) => {
  try {
    // getting access to posts without user condition
    // const posts = await Post.find();
    const posts = await Post.find({ user: req.user.id });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createPost = async (req, res) => {
  try {
    const post = await Post.create({
      user: req.user.id,
      username: req.body.username,
      title: req.body.title,
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getPosts,
  createPost,
};
