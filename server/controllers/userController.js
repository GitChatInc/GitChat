const db = require("../models/model");

const UserController = {};

UserController.getUser = async (req, res, next) => {
  // retrieve repo id from params;
  console.log('params',req.params)
  const { id } = req.params;
  // query db for all messages related to the repo id;
  const query = "SELECT * FROM users WHERE _id = $1";

  try {
    const user = await db.query(query, [id]);
    if (user.rows.length === 0) {
      return next({
        log: "No user found with that ID",
        status: 404,
        message: { err: "No user found." },
      });
    }
    res.locals.user = user.rows[0].user_name;
    console.log('res.locals.user',res.locals.user)
    return next();
  } catch (err) {
    return next({
      log: `Error in userController.getUser middleware. ERROR: ${err}`,
      status: 500,
      message: { err: "Error retrieving user from database." },
    });
  }
};

//database users table has the following:
// CREATE TABLE users (
//    _id   SERIAL,
//   user_name  VARCHAR(50),
//   PRIMARY KEY (_id)
// );
UserController.addUser = async (req, res, next) => {
  const git_handle = res.locals.username || req.body.git_handle

  console.log('handle',git_handle)

  const params = [git_handle];
  // "INSERT INTO users (user_name) VALUES ($1) RETURNING _id, user_name";
  const query =
    'INSERT INTO users (user_name) VALUES ($1) RETURNING *';

  try {
    const addedUser = await db.query(query, params);
    res.locals.addedUser = addedUser.rows;
    console.log('rows',addedUser.rows)
    console.log(addedUser.rows[0]._id);
    res.cookie('userId', addedUser.rows[0]._id);
    return next();
  } catch (err) {
    return next({
      log: `Error in userController addUser middleware. ERROR: ${err}`,
      status: 500,
      message: { err: 'Error adding user to database.' },
    });
  }
};

module.exports = UserController;
