const db = require("../models/model");

const MessageController = {};

<<<<<<< HEAD
 //this function return ALL the messages in a repo given the git_repo_id in params
=======
>>>>>>> main
MessageController.getMessages = async (req, res, next) => {
  // retrieve repo id from params;
  const { id } = req.params;
  // query db for all messages related to the repo id;
  const query = "SELECT * FROM messages WHERE git_repo_id = $1";

  try {
    const messagesInRepo = await db.query(query, [id]);
    res.locals.messages = messagesInRepo.rows;
    return next();
  } catch (err) {
    return next({
      log: `Error in messageController getMessagesInRepo middleware. ERROR: ${err}`,
      status: 400,
      message: { err: "Error retrieving messages from repo" },
    });
  }
};

//adds a message to a specific repo (git_repo_id from params) 
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
    "INSERT INTO messages (user_id, git_repo_id, message_content) VALUES ($1, $2, $3)";

  try {
    const addedMessage = await db.query(query, params);
    console.log({ addedMessage });
    res.locals.addedMessage = addedMessage.rows;
    return next();
  } catch (err) {
    return next({
      log: `Error in messageController addMessage middleware. ERROR: ${err}`,
      status: 400,
      message: { err: "Error adding messages to repo" },
    });
  }
};

module.exports = MessageController;
