import "dotenv/config";
import app from "./app";
import routerApi from "./src/api";
import sequelize from "./src/libs/database";

const PORT = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  const message = "Api Zaiko - Typescript and express";
  res.send(message);
});

routerApi(app);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

async function main() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.log("Unable to connect to the database ", error);
  }
}

main();

export default app;
