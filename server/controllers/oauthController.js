
const oauthController = {};

oauthController.signUp = (req, res, next) => {
  //add the user to the db
  // send a request to db to fetch a list of all repos with their ids;
  // attach the list to the response and persist through middleware;
  return res.status(200);
};


oauthController.signIn = (req, res, next) => {
  // send a request to db to fetch a list of all repos with their ids;
  // attach the list to the response and persist through middleware;
  return res.status(200);
};


module.exports = oauthController;