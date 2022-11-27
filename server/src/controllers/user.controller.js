const userService = require("../services/user.service");

async function getAll(request, response) {
  const users = await userService.getAll();

  response.send(users);
}

async function getOne(request, response) {
  const id = request.params.id;

  const users = await userService.getOne(id);

  response.send(users);
}

async function login(request, response) {
  if (!request.body.email || !request.body.password) {
    response.status(400).send({ status: "error" });
    return;
  }

  const { email, password } = request.body;

  const status = await userService.login(email, password);

  if (status) {
    response.send({ status: "OK" });
  } else {
    response.send({ status: "error" });
  }
}

async function addUser(request, response) {
  const user = request.body;

  const userId = await userService.addUser(user);

  response.send({
    ...user,
    _id: userId,
  });
}

async function updateUser(request, response) {
  const userId = request.params.id;
  const user = request.body;

  await userService.updateUser(userId, user);

  response.send({ status: "OK" });
}

async function removeUser(request, response) {
  const userId = request.params.id;

  await userService.removeUser(userId);

  response.send({ status: "OK" });
}

module.exports = {
  getAll,
  addUser,
  updateUser,
  removeUser,
  getOne,
  login,
};
