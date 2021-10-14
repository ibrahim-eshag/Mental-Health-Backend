import express from "express";
const router = express.Router();
import User from "./../models/UserModel.js";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import { protect } from "../middleware/authMiddleware.js";

// Create a new user ######### Sign up user ########
// router.post("/signup",asyncHandler( async (req, res) => {
// User.inser
//   {
//     email: "amged@domain.com",
//     password: bcrypt.hashSync("123456", 10),
//   },

// }));
router.post(
  "/signup",
  asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    // console.log("userExists......: ",userExists)
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    const newUser = await User.create({
      name,
      email,
      password,
    });

    if (newUser) {
      res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        isAdmin: newUser.isAdmin,
        token: generateToken(newUser._id),
        message: "User is created Successfully...",
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  })
);

router.post(
  "/login",
  protect,
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid email or password");
    }
  })
);

//  delete user
router.delete(
  "/:userId",
  protect,
  asyncHandler(async (req, res) => {
    const { userId } = req.params;
    try {
      const removedUser = await User.remove({ _id: userId });
      console.log("User removed: ", removedUser);
      if (removedUser.deletedCount >= 1) {
        res.json({
          message: "User Successfully deleted...",
        });
      } else {
        throw new Error("Error Deleting User....");
      }
    } catch (error) {
      throw new Error("Error Deleting User....");
    }
  })
);

// get All users , if needed
router.get(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    const users = await User.find({}); // passing an empty object will return all model records
    res.json(users);
  })
);

// get one user
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send({
        statusCode: 404,
        message: `There's no User with the specified id: ${req.params.id}`,
      });
    }
  })
);

// Edit one post
router.put(
  "/:id",
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (user) {
      // getting All the new values entered by the user for update
      if (req.body.email) {
        user.email = req.body.email;
      }
      if (req.body.name) {
        user.name = req.body.name;
      }

      if (req.body.password) {
        user.password = req.body.password;
      }
      // update this user
      const updatedUser = await User.findByIdAndUpdate(user._id, user);

      res.json({
        message: "Your Data updated successfully",
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(404).send({
        statusCode: 404,
        message: `There's no User with the specified id: ${req.params.id}`,
      });
    }
  })
);

export default router;
