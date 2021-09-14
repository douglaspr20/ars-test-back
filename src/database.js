import mongoose from "mongoose";
//env
import dotenv from "dotenv";
dotenv.config();
mongoose
  .connect(process.env.MONGODB_URI)
  .then((db) => console.log("Database is connected"))
  .catch((error) => console.log(error));
