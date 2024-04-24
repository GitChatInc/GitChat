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

//sent something like this to function
// {
//   "repo_names": [
//     { "name": "repo1", "gitId": "123" , "repo_id": "1" },
//     { "name": "repo2", "gitId": "456",  "repo_id": "2"},
//     { "name": "repo3", "gitId": "789", "repo_id": "3"}
//   ], 
//   "userId": 1
// }

//this function is tested
//it checks if the git_repo_id already exists in the repose table 
//if it does not exist, it inserts the repo into BOTH repos & user_repos table
//if the git_repo_id already exists, it only inserts the repo into the userrepos table (associating the repo with the user)

reposController.addRepos = async (req, res, next) => {
  try {
    const { repo_names, userId } = req.body;

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

      // If the repo already exists, dont insert into db
      if (existingRepo.rows.length > 0) {
        addedRepos.push(existingRepo.rows[0]);
      } else {
        // Insert into repos table
        const repoInsertQuery =
          'INSERT INTO repos (repo_name, git_repo_id) VALUES ($1, $2) RETURNING *';
        const repoInsertParams = [repo.name, repo.gitId];
        const addedRepo = await db.query(repoInsertQuery, repoInsertParams);
        addedRepos.push(addedRepo.rows[0]);
      }

      // Insert into user_repos table
      const userRepoInsertQuery =
        'INSERT INTO userrepos (git_repo_id, repo_id, user_id) VALUES ($1, $2, $3) RETURNING *';
      const userRepoInsertParams = [repo.gitId, repo.repo_id, userId];
      const addedUserRepo = await db.query(
        userRepoInsertQuery,
        userRepoInsertParams,
      );
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