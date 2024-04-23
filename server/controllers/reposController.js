
const reposController = {};


reposController.repoList = (req, res, next) => {
  // query db for all repos;
  // persist the list through middleware to send back to client;
  return res.status(200);
};




module.exports = reposController;