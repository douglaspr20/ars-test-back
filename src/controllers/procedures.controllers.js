//Schema
import Procedure from "../schemas/Procedures.schema";

//create a Procedure
export const createProcedure = async (req, res) => {
  const newProcedure = new Procedure(req.body);

  const procedureSave = await newProcedure.save();
  res
    .status(201)
    .json({ message: "Procedure created succesfully", data: procedureSave });
};

//find a Procedures
export const getProcedures = async (req, res) => {
  const procedures = await Procedure.find();
  res.json({ message: "procedures returned successfully", data: procedures });
};

//find a Procedure
export const getProcedure = async (req, res) => {
  const { id } = req.params;

  const procedure = await Procedure.findById(id);

  res.json({ message: "procedure returned successfully", data: procedure });
};

//update a Procedure
export const updateProcedure = async (req, res) => {
  const { id } = req.params;

  const updatedProcedure = await Procedure.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  res.status(200).json({
    message: "procedure updated successfully",
    data: updatedProcedure,
  });
};

//delete a procedure
export const deleteProcedure = async (req, res) => {
  const { id } = req.params;

  const deletedProcedure = await Procedure.findByIdAndRemove(id);

  res.status(200).json({
    message: "procedure deleted successfully",
    data: deletedProcedure._id,
  });
};
