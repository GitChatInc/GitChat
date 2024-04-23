const express = require('express');
const OauthController = require ('../controllers/oauthController.js');
const OauthRouter = express.Router();

//sign up
OauthRouter.post('/signup', OauthController.signup, (req, res, next) => {
  return res.status(200)
})


//sign in
OauthRouter.post('/signin', OauthController.signin, (req, res, next) => {
  return res.status(200)
})

// sign out





module.exports = OauthRouter;