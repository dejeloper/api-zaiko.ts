import express from "express";
import LoginController from "../controllers/login.controllers";

const loginController = new LoginController();

const loginRouter = express.Router();

loginRouter.get("/", loginController.loginGet);

export default loginRouter;
