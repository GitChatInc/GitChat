const express = require("express");
const ReposRouter = express.Router();
const ReposController = require("../controllers/reposController.js");
const MessageController = require("../controllers/messageController.js");

//get all repos for a user
ReposRouter.get("/repos", ReposController.repoList, (req, res, next) => {
  return res.status(200);
});

ReposRouter.get(
  "/messages/:id",
  MessageController.getMessages,
  (req, res, next) => {
    return res.status(200).json(req.messages);
  },
);

ReposRouter.post(
  "/messages/:id",
  MessageController.addMessage,
  (req, res, next) => {
    return res.status(200).json(req.messages);
  },
);

module.exports = ReposRouter;
