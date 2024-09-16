require('dotenv').config();

const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;

const app = express();

// to use: http://localhost:8000/about.html
// app.use(express.static(path.join(__dirname, 'public')))

let posts = [
  { id: 1, title: "Titanic" },
  { id: 2, title: "Fantasia" },
];

app.get("/api/posts", (req, res) => {
  res.json(posts);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
