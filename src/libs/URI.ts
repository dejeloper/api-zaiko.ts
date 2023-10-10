import { config } from "../config/config";

const USER = encodeURIComponent(config.user_db!);
const PASSWORD = encodeURIComponent(config.password_db!);
const URI = `Postgres://${USER}:${PASSWORD}@${config.host_db}:${config.port_db}/${config.name_db}`;

export default URI;
