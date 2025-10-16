import { Router } from "express";
import { deliveryController } from "../controller/Delivery/DeliveryController.js";
export const deliveryRouter = Router()


deliveryRouter.get("/deliverys", deliveryController.pegarTodosDelivery)
deliveryRouter.get("/deliverys/:id_delivery", deliveryController.pegarDeliveryPorID)
deliveryRouter.post("/deliverys", deliveryController.criarDelivery)
deliveryRouter.put("/deliverys/:id_delivery", deliveryController.atualizarDelivery)
deliveryRouter.delete("/deliverys/:id_delivery", deliveryController.deletarDelivery)