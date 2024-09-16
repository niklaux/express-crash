const express = require("express");
const router = express.Router();

let posts = [
  { id: 1, title: "Titanic" },
  { id: 2, title: "Fantasia" },
];

// Get all posts
router.get("/", (req, res) => {
  const limit = req.query.limit;

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
});

// Get a single post
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({ msg: `Post with id ${id} not found` });
  }

  res.status(200).json(post);
});

module.exports = router;
