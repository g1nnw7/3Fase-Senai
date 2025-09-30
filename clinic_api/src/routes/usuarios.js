// Path: src/routes/usuarios.js

import { Router } from "express";
import {
  getTodosOsUsuarios,
  getUsuarioPorId,
  getUsuarioPorEmail,
  criarUsuario,
  atualizarUsuario,
  deletarUsuario,
} from "../controller/Usuario/UsuarioController.js";

export const usuarioRouter = Router();

usuarioRouter.get("/usuarios", getTodosOsUsuarios);
usuarioRouter.get("/usuarios/:id", getUsuarioPorId);
usuarioRouter.get("/usuarios/:email", getUsuarioPorEmail);
usuarioRouter.post("/usuarios", criarUsuario);
usuarioRouter.put("/usuarios/:id", atualizarUsuario);
usuarioRouter.delete("/usuarios/:id", deletarUsuario);
