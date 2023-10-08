import express from "express";
import { loginGet } from "../controllers/login.controllers";

const loginRouter = express.Router();

loginRouter.get("/", loginGet);

export default loginRouter;
