const MessageController = {};
const db = require('../models/model.js');

MessageController.getMessages = (req, res, next) => {
  // retrieve repo id from params;
  // const { id } = req.params;
  // console.log({id});
  // const query = ``;

  // query db for all messages related to the repo id;
    
  // persist the list through middleware to send back to client;
};

MessageController.addMessage = (req, res, next) => {
  // retrieve repo id from params, send a post
  // send post request to db with message content, user id, repo id;
  
};




module.exports = MessageController;