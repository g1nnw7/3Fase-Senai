import { Router } from "express";
import { consultaController } from "../controller/Consulta/ConsultaController.js";
export const consultasRouter = Router()

consultasRouter.get('/consultas', consultaController.getTodosOsConsultas);

consultasRouter.get("/consultas/:id", consultaController.getConsultaPorId)

consultasRouter.post("/consultas", consultaController.criarConsulta)

consultasRouter.put("/consultas/:id", consultaController.atualizarConsulta)

consultasRouter.delete("/consultas/:id", consultaController.deletarConsulta)