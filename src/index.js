//app
import app from "./app";
//Database
import "./database";
//env
import dotenv from "dotenv";
dotenv.config();

app.listen(process.env.PORT || 4000);

console.log(`server on port: ${process.env.PORT}`);
