const { Pool } = require('pg');
require('dotenv').config();

const PG_URI = process.env.PG_URI

const pool = new Pool({
  connectionString: PG_URI,
});

//text is the query string and params is the array of values to be inserted into the query
//callback is a function that takes in an error and result of the query. Havent used yet

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};

// queries used to create the tables
//repos table
// CREATE TABLE repos (
//    _id   SERIAL PRIMARY KEY, 
//   repo_name  VARCHAR(50),
//   git_repo_id INT UNIQUE
// );

//users table
// CREATE TABLE users (
//    _id   SERIAL, 
//   user_name  VARCHAR(50),
//   PRIMARY KEY (_id)
// );

//userrepos
// CREATE TABLE userRepos ( 
//   user_id SERIAL,
//   repo_id  SERIAL,
//   git_repo_id INT, 
//   FOREIGN KEY (user_id) REFERENCES users(_id), 
//   FOREIGN KEY (repo_id) REFERENCES repos(_id), 
//   FOREIGN KEY (git_repo_id) REFERENCES repos(git_repo_id)
// );


// CREATE TABLE messages (
//    _id SERIAL PRIMARY KEY, 
//    user_id SERIAL,
//    git_repo_id INT,
//    message_content VARCHAR(250), 
//    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP + INTERVAL '24 hours',
//    FOREIGN KEY (user_id) REFERENCES users(_id), 
//    FOREIGN KEY (git_repo_id) REFERENCES repos(git_repo_id) 
// );

