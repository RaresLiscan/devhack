const { UserModel } = require("../models/user.model");

async function getAll() {
  return await UserModel.find().lean();
}

async function getOne(id) {
  return await UserModel.findById(id);
}

async function getByEmail(email) {
  return await UserModel.findOne({ email }).lean();
}

async function create(user) {
  return await UserModel.create(user);
}

async function update(id, user) {
  return await UserModel.updateOne({ _id: id }, user);
}

async function remove(id) {
  return await UserModel.deleteOne({ _id: id });
}

module.exports = {
  getAll,
  create,
  getOne,
  update,
  remove,
  getByEmail,
};
