import mongoose from "mongoose";
// here i will create the UserSchema using another syntax different that what is in the PostModel

const UserSchema = mongoose.Schema(
  {
    // if one key only is required you can write it outside the object, e.g: name:String
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  { timestamps: true } // this will crate the created_at , and updated_at fields in the database.
);

//  creating the Model from the schema
const User = mongoose.model("User", UserSchema);

// making it available outside
export default User;
