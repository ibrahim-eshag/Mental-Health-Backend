import mongoose from "mongoose";
const { Schema } = mongoose;

/*
 1-Create the Schema
 2-Create the model from the schema
 3-Storing to database by seeding initial data and latter storing user's data
*/
const postSchema = new Schema(
  {
    title: String, // String is shorthand for {type: String}
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User", // this will add a relationship between the Post and the User Model
    },
    body: String,
    comments: [{ body: String, date: Date }],
    image: { type: String, required: true, default: "./images/img.png" }, // this one should have a default image incase no image is provided
    isFavorite: Boolean,
    //   meta: {
    //     votes: Number,
    //     favs:  Number
    //   }     // if the business logic contains filtering or something, this could hel
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);
export default Post;
