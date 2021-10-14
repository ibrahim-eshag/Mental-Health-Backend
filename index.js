import dotenv from "dotenv";
import express from "express";
import postsRoutes from "./routes/postsRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";
import { ErrorHandler, NotFound } from "./middleware/errorsMiddleware.js";
// bring in the configuration
dotenv.config();
// connecting to the Database......
connectDB();

const app = express();
app.use(express.json())


//  link the posts Routes
app.use('/api/posts', postsRoutes);
app.use('/api/users', userRoutes);

// A fallback url endpoint response
app.use(NotFound)

// To override the default Error middleWare, you write tour customized error middleware 
//  with error, req, res,next
app.use(ErrorHandler)
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log("The .env ::: ", process.env.PORT);

  console.log(`App is running now in port ${port}.`);
});
