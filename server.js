const express = require("express");
const path = require("path");

const app = express();

// setup static folder, render html pages
// to use: http://localhost:8000/about.html
// app.use(express.static(path.join(__dirname, 'public')))

let posts = [
  { id: 1, title: "Titanic" },
  { id: 2, title: "Fantasia" },
];

app.get("/api/posts", (req, res) => {
  res.json(posts);
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
