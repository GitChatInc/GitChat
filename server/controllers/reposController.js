const db = require('../models/model');
const reposController = {};

//list all the repos for a specific user
reposController.getUserRepoList = async (req, res, next) => {
  try {
    // retrieve user id from req.body or req.params??;
    // const { userId } = req.body;
    const { userId } = req.params;
    // query db for all repos for specifiic user
    const query = 'SELECT * FROM userrepos WHERE user_id = $1';
    const params = [userId];
    const userRepos = await db.query(query, params);
    // persist the list through middleware to send back to client;
    res.locals.userRepos = userRepos.rows;
    return next();
  } catch (err) {
    return next({
      log: `Error in reposController.repoList middleware. ERROR: ${err}`,
      status: 400,
      message: { err: 'Error retrieving repos for user' },
    });
  }
};

//send something like this to function
// {
//   "repo_names": [
//     { "name": "repo1", "gitId": "123" },
//     { "name": "repo2", "gitId": "456" },
//     { "name": "repo3", "gitId": "789" }
//   ], 
//   "userId": 1
// }

//this function is tested
//it checks if the git_repo_id already exists in the repose table 
//if it does not exist, it inserts the repo into BOTH repos & user_repos table
//if the git_repo_id already exists, it only inserts the repo into the userrepos table (associating the repo with the user)

//add a
reposController.addRepos = async (req, res, next) => {
  try {

    // get repos and userID from req.body if it doesn't exist on res.locals
    const repo_names = res.locals.repos || req.body.repo_names
    const userId = res.locals.userId || req.body.userId

    const addedRepos = [];
    const addedUserRepos = [];

    for (const repo of repo_names) {
      // Check if the git_repo_id already exists in the database
      const existingRepoQuery = 'SELECT * FROM repos WHERE git_repo_id = $1';
      const existingRepoParams = [repo.gitId];
      
      const existingRepo = await db.query(
        existingRepoQuery,
        existingRepoParams,
      );

      //if repo 
      if (existingRepo.rows.length > 0) {
        //might not need this line
        addedRepos.push(existingRepo.rows[0]);
      } else {
        // Insert into repos table
        const repoInsertQuery =
          'INSERT INTO repos (repo_name, git_repo_id) VALUES ($1, $2) RETURNING *';
        const repoInsertParams = [repo.name, repo.gitId];
        const addedRepo = await db.query(repoInsertQuery, repoInsertParams);
        addedRepos.push(addedRepo.rows[0]);
        
      }
    }

    // Insert into userrepos table
    for (const repo of addedRepos) {
      const query =
      'INSERT INTO userrepos (user_id, repo_id, git_repo_id) VALUES ($1, $2, $3) RETURNING *';
      const params = [userId, repo._id, repo.git_repo_id];
      const addedUserRepo = await db.query(query, params);
      addedUserRepos.push(addedUserRepo.rows[0]);
    }

    const addedRepoInfo = { addedRepos, addedUserRepos };
    res.locals.addedRepos = addedRepoInfo;
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