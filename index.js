import dotenv from "dotenv";
import express from "express";
import posts from "./data/posts.js";
import connectDB from "./config/db.js";

// bring in the configuration
dotenv.config();
// connecting to the Database......
connectDB();

const app = express();

// Main Routes, in futire wll be moved to another seperate Folder

app.get("/api/posts", (req, res) => {
  res.json(posts);
});

// get one post
app.get("/api/posts/:id", (req, res) => {
  console.log(`The comming id is: ${req.params.id}`);
  const thePost = posts.find((post) => post.id == req.params.id);
  if (thePost == undefined) {
    res.status(404).send({
      statusCode: 400,
      message: `There's no Post with the specified id: ${req.params.id}`,
    });
  }
  res.json(thePost);
});

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log("The .env ::: ", process.env.PORT);

  console.log(`App is runnig now in port ${port}.`);
});
