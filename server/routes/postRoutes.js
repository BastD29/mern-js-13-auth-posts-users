const express = require("express");
const router = express.Router();
const { getPosts, createPost } = require("../controllers/postController");
const { requireAuth } = require("../middleware/authMiddleware");

router.get("/", requireAuth, getPosts);
router.post("/", requireAuth, createPost);

module.exports = router;
