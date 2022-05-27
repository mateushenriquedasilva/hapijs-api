"user strict";
const Hapi = require("@hapi/hapi");
const pool = require("./model/pool");
const routes = require("./router/users");

const init = async () => {
  // Configure
  const server = new Hapi.server({
    port: 3000,
    host: "localhost",
  });

  // Route
  server.route(routes);

  // Start server
  await server.start();
  console.log(`Database connection: ${pool.activeConnections()}`);
  console.log(`Server running on ${server.info.uri}`);
};

init();
