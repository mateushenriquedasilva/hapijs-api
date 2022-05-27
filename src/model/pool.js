const mariadb = require("mariadb");
const dotenv = require("dotenv");
dotenv.config();

const pool = mariadb.createPool({
  host: "localhost",
  database: "users",
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

module.exports = pool;