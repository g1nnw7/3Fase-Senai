import { Router } from "express";
import { vehicleController } from "../controller/Vehicle/VehicleController.js";
export const vehicleRouter = Router()


vehicleRouter.get("/vehicles", vehicleController.pegarTodosVehicle)
vehicleRouter.get("/vehicles/:id_vehicle", vehicleController.pegarVehiclePorID)
vehicleRouter.post("/vehicles", vehicleController.criarVehicle)
vehicleRouter.put("/vehicles/:id_vehicle", vehicleController.atualizarVehicle)
vehicleRouter.delete("/vehicles/:id_vehicle", vehicleController.deletarVehicle)
