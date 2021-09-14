import { Schema, model } from "mongoose";

const procedureSchema = new Schema(
  {
    name: String,
    code: String,
    reclaimed: String,
    difference: String,
    authorized: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Procedure", procedureSchema);
