const challengeService = require("../services/challenge.service");

async function getAll(request, response) {
  const challenges = await challengeService.getAll();

  response.send(challenges);
}

async function getOne(request, response) {
  const id = request.params.id;

  const challenges = await challengeService.getOne(id);

  response.send(challenges);
}

async function getChallengeForUser(request, response) {
  const userId = request.params.id;
  //TODO
}

async function addChallenge(request, response) {
  const challenge = request.body;

  const challengeId = await challengeService.addChallenge(challenge);

  response.send({
    ...challenge,
    _id: challengeId,
  });
}

async function updateChallenge(request, response) {
  const challengeId = request.params.id;
  const challenge = request.body;

  await challengeService.updateChallenge(challengeId, challenge);

  response.send({ status: "OK" });
}

async function removeChallenge(request, response) {
  const challengeId = request.params.id;

  await challengeService.removeChallenge(challengeId);

  response.send({ status: "OK" });
}

module.exports = {
  getAll,
  getChallengeForUser,
  addChallenge,
  updateChallenge,
  removeChallenge,
  getOne,
};
