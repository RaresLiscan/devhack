const userDatabase = require("../database/user.database");

async function getAll() {
  const users = await userDatabase.getAll();

  return users;
}

async function getOne(id) {
  return await userDatabase.getOne(id);
}

async function login(email, password) {
  const user = await userDatabase.getByEmail(email);

  if (!user) {
    return false;
  }

  if (user.password === password) {
    return true;
  }

  return false;
}

async function addUser(challenge) {
  const newDoc = await userDatabase.create(challenge);

  return newDoc.id;
}

async function updateUser(id, challenge) {
  return await userDatabase.update(id, challenge);
}

async function removeUser(id) {
  return await userDatabase.remove(id);
}

module.exports = {
  getAll,
  getOne,
  addUser,
  updateUser,
  removeUser,
  login,
};
