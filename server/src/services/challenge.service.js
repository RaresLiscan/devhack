const challengeDatabase = require("../database/challanges.database");

async function getAll() {
  const challenges = await challengeDatabase.getAll();

  return challenges;
}

async function getOne(id) {
  return await challengeDatabase.getOne(id);
}

async function addChallenge(challenge) {
  const newDoc = await challengeDatabase.create(challenge);

  return newDoc.id;
}

async function updateChallenge(id, challenge) {
  return await challengeDatabase.update(id, challenge);
}

async function removeChallenge(id) {
  return await challengeDatabase.remove(id);
}

module.exports = {
  getAll,
  getOne,
  addChallenge,
  updateChallenge,
  removeChallenge,
};
