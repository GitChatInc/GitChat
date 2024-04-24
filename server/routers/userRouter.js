const express = require("express");
const UserRouter = express.Router();
const UserController = require("../controllers/userController.js");

UserRouter.get("/:id", UserController.getUser, (req, res, next) => {
  return res.status(200).json(res.locals.user);
  // return next();
});

UserRouter.post("/", UserController.addUser, (req, res, next) => {
  return res.status(201).json(res.locals.addedUser);
});

module.exports = UserRouter;
