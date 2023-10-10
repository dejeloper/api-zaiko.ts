import { Sequelize } from "sequelize";
import URI from "./URI";

const sequelize = new Sequelize(URI, {
  dialect: "postgres",
  logging: false,
});

sequelize.sync();

export default sequelize;
