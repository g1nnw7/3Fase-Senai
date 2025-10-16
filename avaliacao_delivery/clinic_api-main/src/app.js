// Path: src/app.js

import express from "express";
import cors from "cors";

import { usuarioRouter } from "./routes/usuarios.js";
import authRouter from "./routes/authRoutes.js";
import { auth } from "./middleware/auth.js";
import { driverRouter } from "./routes/driver.js";
import { vehicleRouter } from "./routes/vehicle.js";
import { deliveryRouter } from "./routes/delivery.js";

const app = express();

// Middlewares globais
app.use(cors()); 
app.use(express.json());

app.get("/ping", (req, res) => {
  console.log(" GET /ping chegou");
  res.send("pong");
});

// Rotas
// app.use('/auth', authRouter)

// app.use(auth);
// rotas privadas
app.use(usuarioRouter);
app.use(vehicleRouter);
app.use(driverRouter);
app.use(deliveryRouter);

const port = 3000;
app.listen(port, () => console.log(`Api rodando na porta ${port}`));
