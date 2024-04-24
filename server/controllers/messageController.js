const db = require("../models/model");

const MessageController = {};

<<<<<<< HEAD
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
=======
 
MessageController.getMessages = async (req, res, next) => {
  // retrieve repo id from params;
  const { id } = req.params;
  // query db for all messages related to the repo id;
  const query = 'SELECT * FROM messages WHERE git_repo_id = $1';

  try {
    const messagesInRepo = await db.query(query, [id]);
    res.locals.messages = messagesInRepo.rows;
    return next();
  } catch (err) {
    return next({
      log: `Error in messageController getMessagesInRepo middleware. ERROR: ${err}`,
      status: 400,
      message: { err: 'Error retrieving messages from repo' },
>>>>>>> main
    });
  }
};

<<<<<<< HEAD
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
=======
//database messages table has the following: 
//messages
// _id
// user_id
// repo_id
// created_at
// message_content
MessageController.addMessage = async (req, res, next) => {
  // retrieve repo id from params, send a post
  // send post request to db with message content, user id, repo id;
  const { id } = req.params;
  const { user_id, message_content } = req.body; 
  const params = [user_id, parseInt(id), message_content];
  const query = 
  'INSERT INTO messages (user_id, git_repo_id, message_content) VALUES ($1, $2, $3)';
  
  try {
    const addedMessage = await db.query(query, params);
    console.log({ addedMessage });
    res.locals.addedMessage = addedMessage.rows;
    return next();
  } catch (err) {
    return next({
      log: `Error in messageController addMessage middleware. ERROR: ${err}`,
      status: 400,
      message: { err: 'Error adding messages to repo' },
>>>>>>> main
    });
  }
};

<<<<<<< HEAD
module.exports = MessageController;
=======
module.exports = MessageController;
>>>>>>> main
