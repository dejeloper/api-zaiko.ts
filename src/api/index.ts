import express from "express";
import loginRouter from "./v1/routes/login.router";

function routerApi(app: express.Application) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/login", loginRouter);
}

export default routerApi;
