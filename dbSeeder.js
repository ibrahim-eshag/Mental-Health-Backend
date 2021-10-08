// import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/users.js";
import posts from "./data/posts.js";
import User from "./models/UserModel.js";
import Post from "./models/PostModel.js";
import connectDB from "./config/db.js";

//NOTE: this File is completely separate and doesn't hae anything to do with server\
// running , so every setup from database connection and so on is handled here
dotenv.config();

connectDB();

const importData = async () => {
  try {
    //   clean and fresh data import , which implies that we should delete any previous data
    //   available in the database
    await Post.deleteMany(); // clear all previous posts in the database...
    await User.deleteMany();

    const initialUsers = await User.insertMany(users);
    //  depending on the Business Model here we can allow certain users to create posts

    // All i did is i took the post Author from the users table...
    const initialPosts = posts.map((post) => {
      return {
        ...post,
        author: initialUsers.find((user) => user.name == post.author),
      };
    });

    await Post.insertMany(initialPosts);

    console.log("Data imported successfully...");
    process.exit();
  } catch (error) {
    console.log(`Error Importing Data to MongoDB Database: ${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    //   clean and fresh data import , which implies that we should delete any previous data
    //   available in the database
    await Post.deleteMany(); // clear all previous posts in the database...
    await User.deleteMany();

    console.log("Data destroyed successfully 😀😀🤗!!!...");
    process.exit();
  } catch (error) {
    console.log(`Error Importing Data to MongoDB Database: ${error}`);
    process.exit(1);
  }
};

if (process.argv[2] == "-d") {
  destroyData();
} else {
  importData();
}

// This is What someone will call , Detailed Explained Code, not over-commented neither non-explained code.
