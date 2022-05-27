const pool = require("./pool");

// find all users
async function findAllUsers() {
  const query = `SELECT * FROM users`;
  const result = await pool.query(query);

  let users = [];

  if (result) {
    users = result;
  }

  return users;
}

// find users by id
async function findUsersById(id) {
  const query = `SELECT * FROM users WHERE id = '${id}'`;
  const result = await pool.query(query);

  let user = [];

  if (result) {
    user = result;
  }

  return user;
}

// create new user
async function createNewUser(user) {
  const query = `INSERT INTO users (username, password) VALUES("${user.username}", "${user.password}")`;
  const result = await pool.query(query);

  return result;
}

// update a user
async function updateUser(user, id) {
  const query = `UPDATE users SET username = "${user.username}", password = "${user.password}" WHERE id = "${id}" `;
  const result = await pool.query(query);

  return result;
}

// delete a user
async function deleteUser(id) {
  const query = `DELETE FROM users WHERE id = "${id}"`;
  const result = await pool.query(query);

  return result;
}

module.exports = {
  findAllUsers,
  findUsersById,
  createNewUser,
  updateUser,
  deleteUser,
};
