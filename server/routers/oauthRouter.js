const express = require('express');
const OauthController = require ('../controllers/oauthController.js');
const SessionController = require ('../controllers/sessionController.js');
const OauthRouter = express.Router();

//sign up
OauthRouter.post('/signup', OauthController.signUp, SessionController.startSession, (req, res, next) => {
  return res.status(200)
})


//sign in
OauthRouter.post('/signin', OauthController.signIn, SessionController.startSession, (req, res, next) => {
  return res.status(200)
})

// sign out

OauthRouter.delete('/signout', SessionController.endSession, (req, res, next) => {
  return res.status(200)
})



module.exports = OauthRouter;