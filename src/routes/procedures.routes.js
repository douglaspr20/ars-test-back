import { Router } from "express";
//Controllers
import * as ProceduresControllers from "../controllers/procedures.controllers";
const router = Router();

router.post("/procedures/add", ProceduresControllers.createProcedure);

router.get("/procedures", ProceduresControllers.getProcedures);

router.get("/procedures/:id", ProceduresControllers.getProcedure);

router.put("/procedures/update/:id", ProceduresControllers.updateProcedure);

router.delete("/procedures/delete/:id", ProceduresControllers.deleteProcedure);

export default router;
