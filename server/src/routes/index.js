const express = require("express");

const router = express.Router();
const { router: challengeRouter } = require("./challange.route");
const { router: userRouter } = require("./user.route");

router.use("/challenges", challengeRouter);
router.use("/users", userRouter);

module.exports = { router };
