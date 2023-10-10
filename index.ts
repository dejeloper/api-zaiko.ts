import "dotenv/config";
import app from "./app";
import routerApi from "./src/api";

const PORT = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  const message = "Api Zaiko - Typescript and express";
  res.send(message);
});

routerApi(app);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
