const express = require("express");
const UserRouter = express.Router();
const UserController = require("../controllers/userController.js");

UserRouter.get("/user/:id", userController.getUser, (req, res, next) => {
  return res.status(200).json(res.locals.user);
});

UserRouter.post("/user/:id", userController.addUser, (req, res, next) => {
  return res.status(201).json(res.locals.addedMessage);
});

module.exports = UserRouter;
