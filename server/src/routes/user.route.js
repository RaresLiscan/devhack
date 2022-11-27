const express = require("express");
const userController = require("../controllers/user.controller");

const router = express.Router();

router.get("/", userController.getAll);
router.post("/login", userController.login);
router.get("/u/:id", userController.getOne);
router.post("/register", userController.addUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.removeUser);

module.exports = { router };
