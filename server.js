import dotenv from "dotenv";
dotenv.config();

import express from "express";
import path from "path";
import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
const port = process.env.PORT || 8000;

const app = express();

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger Middleware
app.use(logger);

app.use("/api/posts", posts);

// Error handler middleware
app.use(errorHandler);

// to use: http://localhost:8000/about.html
// app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
