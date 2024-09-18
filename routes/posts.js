import express from "express";
const router = express.Router();

let posts = [
  { id: 1, title: "Titanic" },
  { id: 2, title: "Fantasia" },
];

// Middleware, 3 required params
const logger = (req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );

  next();
};

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

// Create new post
router.post("/", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };

  if (!newPost.title) {
    return res.status(400).json({ msg: "Please input a title" });
  }

  posts.push(newPost);

  res.status(201).json(posts);
});

// Update a post
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  let post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({ msg: `Post with id ${id} is not found` });
  }

  post.title = req.body.title;

  res.status(200).json(posts);
});

// Delete a post
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  let post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({ msg: `Post with id ${id} is not found` });
  }

  posts = posts.filter((post) => post.id !== id);

  res.status(200).json(posts);
});

export default router
