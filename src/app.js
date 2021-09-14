//express
import express from "express";
import morgan from "morgan";
import RoutesProcedures from "./routes/procedures.routes";

//Cors
import cors from "cors";

const app = express();

//config
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes
app.get("/", (req, res) => {
  res.json({
    author: "Douglas",
    description: "ARS Test",
  });
});

app.use(RoutesProcedures);
export default app;
