const db = require("../models/model");

const MessageController = {};

MessageController.getMessages = async (req, res, next) => {
  console.log("INSIDE GETMESSAGES!");
  // query db for all messages related to the repo id
  const repoId = req.params.id; // _id of specified repo

  // define query statement
  const query = `
    SELECT m._id, m.message_content, m.created_at, u.user_name
    FROM messages m
    JOIN users u ON m.user_id = u._id
    WHERE m.repo_id = $1
    ORDER BY m.created_at DESC;
  `;

  try {
    // invoke db.query method, passing in text & setting $1 = repoId;
    // set returned result equal to array of message objects
    let { rows } = await db.query(query, [repoId]);
    console.log("rows: ", rows);

    req.messages = rows; // Attach the result to the request object
    console.log("req.messages (get): ", req.messages);

    return next();
  } catch (err) {
    return next({
      log: "Error from getMessages middleware",
      status: 500,
      message: { err: err },
    });
  }
};

MessageController.addMessage = async (req, res, next) => {
  console.log("INSIDE ADDMESSAGE!");
  // retrieve repo id from params
  const repoId = req.params.id;

  // send post request to db with message content, user id, repo id;
  const { user_id, repo_id, message_content } = req.body;

  const query = `
    INSERT INTO messages (user_id, repo_id, message_content)
    VALUES ($1, $2, $3)
    RETURNING _id, message_content, created_at;
  `;

  try {
    // returns _id, message_content, & created_at for all rows in message table
    const { rows } = await db.query(query, [user_id, repo_id, message_content]);
    // new message = first row in rows
    req.message = rows[0]; //attach new message to the req object
    console.log("req.message: ", req.message);
    next();
  } catch (err) {
    return next({
      log: "Error from addMessage middleware",
      status: 500,
      message: { err: err },
    });
  }
};

module.exports = MessageController;
