const userControllers = require("../controllers/userControllers");

const routes = [
  {
    method: "GET",
    path: "/",
    handler: userControllers.homeRoute,
  },
  {
    method: "GET",
    path: "/users",
    handler: userControllers.findAllUsers,
  },
  {
    method: "GET",
    path: "/users/{id}",
    handler: userControllers.findUsersById,
  },
  {
    method: "POST",
    path: "/users",
    handler: userControllers.createNewUser,
  },
  {
    method: "PUT",
    path: "/users/{id}",
    handler: userControllers.updateUser,
  },
  {
    method: "DELETE",
    path: "/users/{id}",
    handler: userControllers.deleteUser,
  }
];

module.exports = routes;
