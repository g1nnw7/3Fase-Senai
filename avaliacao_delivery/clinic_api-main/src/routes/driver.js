import { Router } from "express";
import { driverController } from "../controller/Driver/DriverController.js";
export const driverRouter = Router()


driverRouter.get("/drivers", driverController.pegarTodosDriver)
driverRouter.get("/drivers/:id_driver", driverController.pegarDriverPorID)
driverRouter.post("/drivers", driverController.criarDriver)
driverRouter.put("/drivers/:id_driver", driverController.atualizarDriver)
driverRouter.delete("/drivers/:id_driver", driverController.deletarDriver)