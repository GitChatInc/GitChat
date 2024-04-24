
const reposController = {};


reposController.repoList = (req, res, next) => {
  //how do we get the userId
  // query db for all repos for specifiic user
  
  // persist the list through middleware to send back to client;
  return res.status(200);
};

//attempt at addRepos function(not tested)
reposController.addRepos = async (req, res, next) => {
  try {
    const { repo_names } = req.body;

    const addedRepos = [];

    for (const repo of repo_names) {
      const params = [repo.name, repo.gitId];
      const query = 'INSERT INTO repos (repo_name, git_repo_id) VALUES ($1, $2) RETURNING *';

      const addedRepo = await db.query(query, params);

      addedRepos.push(addedRepo.rows[0]);
    }

    res.locals.addedRepos = addedRepos;
    return next();
  } catch (err) {
    return next({
      log: `Error in reposController.addRepos middleware. ERROR: ${err}`,
      status: 500,
      message: { err: 'Error adding repos' },
    });
  }
};


module.exports = reposController;