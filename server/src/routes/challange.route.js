const express = require("express");
const challengeController = require("../controllers/challanges.controller");

const router = express.Router();

router.get("/", challengeController.getAll);
router.get("/:id", challengeController.getOne);
router.get("/u/:id", challengeController.getChallengeForUser);
router.post("/", challengeController.addChallenge);
router.put("/:id", challengeController.updateChallenge);
router.delete("/:id", challengeController.removeChallenge);

module.exports = { router };
