import "dotenv/config";
import express from "express";
import cors from "cors";
import routerApi from "./src/api";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  const message = "Api Rest with TypeScript and Express - Api Zaiko";
  res.send(message);
});

routerApi(app);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
