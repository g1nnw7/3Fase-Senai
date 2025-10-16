import { Router } from "express";
import { auth } from "../middleware/auth.js";
import { authController } from "../controller/Auth/AuthController.js";

const authRouter = Router();

authRouter.post("/register", authController.register)
authRouter.post("/login", authController.login)
authRouter.post('/logout',  authController.logout);
authRouter.post('/refresh',  authController.refresh);


export default authRouter;