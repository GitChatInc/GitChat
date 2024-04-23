const path = require('path');
const express = require('express');
const ReposRouter = require('./routers/reposRouter.js');
const githubController = require('./controllers/githubController.js')
require('dotenv').config();

const app = express();
const PORT = 3000;

if (process.env.NODE_ENV === 'development') {
  //get files from src during dev
  app.use(express.static(path.resolve(__dirname, '../src')));
} else {
  //get files from dist during production
  app.use(express.static(path.resolve(__dirname, '../dist')));
}

app.use(express.json());

// response needs to be edited after middleware logic for oauth completed
app.get('/api/auth', (req, res) => {
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}`);
});

app.use('/api/github', githubController.handleCallback, githubController.getUser, githubController.getRepos, (req, res) => {
  // TODO: after the github controller, username and repos should be posted to the database for future use
  return res.redirect('/chat')
});

// response needs to be edited after middleware logic for repos completed
app.use('/api', ReposRouter, (req, res) => {
  res.status(200);
});








app.use('*', (req, res) => {
  console.log('404 Page not found');
  res.sendStatus(404);
});

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Error from middleware',
    status: 500,
    message: { err: 'Unknown error' },
  };

  const errorObj = Object.assign({}, defaultErr, err);

  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
