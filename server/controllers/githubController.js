require("dotenv").config();

const GithubController = {};

GithubController.handleCallback = (req, res, next) => {
  const { code } = req.query;
  fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "Application/JSON",
      Accept: "application/json",
    },
    body: JSON.stringify({
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      code: code,
    }),
  })
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      res.locals.token = data.access_token;
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

GithubController.getUser = (req, res, next) => {
  // retrieve the current user's username from the github API; docs available here: https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-the-authenticated-user
  // use the token available on res.locals.token
  // use the CLIENT_ID and CLIENT_SECRET available on process.env

  const token = res.locals.token;
  fetch("https://api.github.com/user", {
    headers: {
      "Content-Type": "Application/JSON",
      Authorization: `token ${token}`
    },
  })
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      // console.log(data);
      // const expirationDate = new Date(Date.now() + 15 * 1000);
      res.locals.username = data.login;
      // console.log('id',data.id)
      // res.cookie('userId', data.id, { httpOnly: true});
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

GithubController.getRepos = (req, res, next) => {
  // retrive a list of the current user's repos from github API; docs available here: https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-repositories-for-the-authenticated-user
  // use the token available on res.locals.token
  // use the CLIENT_ID and CLIENT_SECRET available on process.env

  const token = res.locals.token;
  fetch("https://api.github.com/user/repos", {
    headers: {
      "Content-Type": "Application/JSON",
      Authorization: `token ${token}`,
    },
  })
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      const repos = []
      data.forEach((repo) => {
        repos.push({gitId:repo.id,name:repo.name})
      })
      res.locals.repos = repos
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

module.exports = GithubController;
