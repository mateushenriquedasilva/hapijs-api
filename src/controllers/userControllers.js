const userControllers = require("../model/users");

const homeRoute = (request, h) => {
  return "Server running🔥";
};

// find all users
const findAllUsers = (request, h) => {
  const users = userControllers.findAllUsers();
  return users;
};

// find users by id
const findUsersById = async (request, h) => {
  const id = request.params.id;
  const user = await userControllers.findUsersById(id);

  return user;
};

// create new user
const createNewUser = async (request, h) => {
  const user = request.payload;
  if (user.user || user.password) {
    const result = await userControllers.createNewUser(user);
    return { msg: "created user" };
  }

  return { msg: "error create new user" };
};

// update user
const updateUser = async (request, h) => {
  const id = request.params.id;
  const user = request.payload;

  if (user.user || user.password) {
    const result = await userControllers.updateUser(user, id);
    return { msg: "user update success" };
  }

  return { msg: "error updating user" };
};

const deleteUser = async (request, h) => {
  const id = request.params.id;
  const result = await userControllers.deleteUser(id);

  return { msg: "user deleted" };
};

module.exports = {
  homeRoute,
  findAllUsers,
  findUsersById,
  createNewUser,
  updateUser,
  deleteUser,
};
