const express = require("express");

const router = express.Router();
const { router: challengeRouter } = require("./challange.route");

router.use("/challenges", challengeRouter);

module.exports = { router };
