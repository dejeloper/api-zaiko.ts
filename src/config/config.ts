const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  host_db: process.env.HOSTDB || "localhost",
  port_db: process.env.PORTDB || 5432,
  user_db: process.env.USERDB,
  password_db: process.env.PASSDB,
  name_db: process.env.NAMEDB || "zaiko_db",
};

export { config };
