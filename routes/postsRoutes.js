import express from "express";
const router = express.Router();
import Post from "./../models/PostModel.js";
import asyncHandler from "express-async-handler";

import { protect } from "../middleware/authMiddleware.js";

router.get(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    const posts = await Post.find({}); // passing an empty object will return all model records
    res.json(posts);
  })
);

// get one post
router.get(
  "/:id",
  protect,
  asyncHandler(async (req, res) => {
    const thePost = await Post.findById(req.params.id);
    if (thePost) {
      res.json(thePost);
    } else {
      //  because we have our custom Error handler, setting the status code (optional ,
      // if not set it will be what is already there in the ErrorHandler , which is 500) first and
      //  then throwing an Error
      res.status(404);
      throw new Error(
        `There's no Post with the specified id: ${req.params.id}`
      );
    }
  })
);

// update onr Post
router.put(
  "/:id",
  asyncHandler(async (req, res) => {
    const originalPost = await Post.findById(req.params.id);
    let isObjectModified = false;
    if (originalPost) {
      // getting All the new values entered by the post for update
      if (req.body.title) {
        originalPost.title = req.body.title;
        isObjectModified = true;
      }
      if (req.body.body) {
        originalPost.body = req.body.body;
        isObjectModified = true;
      }

      if (req.body.image) {
        originalPost.image = req.body.image;
        isObjectModified = true;
      }
      if (!isObjectModified) {
        res.json({
          message: "No modifications are send for updates",
        });
      } else {
        // update this post
        const updatedPost = await Post.findByIdAndUpdate(
          originalPost._id,
          originalPost
        );
        res.json({
          message: "Your Data updated successfully",
          body: originalPost.body,
          title: originalPost.title,
        });
      }
    } else {
      res.status(404).send({
        statusCode: 404,
        message: `There's no post with the specified id: ${req.params.id}`,
      });
    }
  })
);

//  Delete one Post
router.delete(
  "/:postId",
  protect,
  asyncHandler(async (req, res) => {
    const { postId } = req.params;

    try {
      const removedPost = await Post.deleteOne({ _id: postId });
      console.log("Post removed: ", removedPost);
      if (removedPost.deletedCount >= 1) {
        res.json({
          message: "Post Successfully deleted...",
        });
      } else {
        throw new Error("Error Deleting Post....");
      }
    } catch (error) {
      throw new Error("Error Deleting Post....");
    }
  })
);
export default router;
