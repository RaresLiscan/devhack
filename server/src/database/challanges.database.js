const { ChallengeModel } = require("../models/challanges.model");

async function getAll() {
  return await ChallengeModel.find().lean();
}

async function getOne(id) {
  return await ChallengeModel.findById(id);
}

async function create(challenge) {
  return await ChallengeModel.create(challenge);
}

async function update(id, challenge) {
  return await ChallengeModel.updateOne({ _id: id }, challenge);
}

async function remove(id) {
  return await ChallengeModel.deleteOne({ _id: id });
}

module.exports = {
  getAll,
  create,
  getOne,
  update,
  remove,
};
