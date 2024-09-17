require("dotenv").config();

const express = require("express");
const path = require("path");
const posts = require("./routes/posts");
const port = process.env.PORT || 8000;

const app = express();

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/posts", posts);

// to use: http://localhost:8000/about.html
// app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
