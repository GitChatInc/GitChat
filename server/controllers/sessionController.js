const { v4: uuidv4 } = require('uuid');
const sessionID = uuidv4();

const SessionController = {};

SessionController.startSession = async (req, res, next) => {
  // check if cookie has session id
  // const sessionId = req.cookie.sessionId ? req.cookie.sessionID : uuidv4();
  // create session Id
  const sessionId = uuidv4();
  
  // get username and maybe id from res.body after oauth completed
  const { userName } = res.body;

  const text = `write db query`;
  const oneHour = 3600000; // 1 hour in milliseconds
  const expirationDate = new Date(Date.now() + oneHour);
  // create session
  try {
    const result = await db.query(text);
    const ssid = result.sessionId; // get id returning from the db;
    res.cookie('ssid', ssid, { httpOnly: true, expires: expirationDate });
   
    return next();

  } catch (error) {
    const err = {
      log: `Error in sessionController.startSession: ${error}`,
      message: 'Error starting a session',
      status: 500,
    };
    return next(err);
  }

};

// checking if user has session running
SessionController.isLoggedIn = async (req, res, next) => {
  // get username and maybe id from res.body after oauth completed
  const { userName } = res.body;
  const ssid = req.cookie.ssid;
  const text = `write db query`;
  const values = ['values'];
  
  try {
    const result = await db.query(text, values);
    res.locals.isLoggedIn = true; // get id returning from the db;
    return next();

  } catch (error) {
    const err = {
      log: `Error in sessionController.isLoggedIn: ${error}`,
      message: 'Please log in',
      status: 500,
    };
    return next(err);
  }

};

SessionController.endSession = async (req, res, next) => {
  // get username and maybe id from req.body 
  const { userName } = res.body;
  const ssid = req.cookie.ssid;
  const text = `write db query`;
  const values = ['values'];
  
  try {
    await db.query(text, values);
    res.locals.isLoggedIn = true; // get id returning from the db;
    return next();

  } catch (error) {
    const err = {
      log: `Error in sessionController.isLoggedIn: ${error}`,
      message: 'Please log in',
      status: 500,
    };
    return next(err);
  }

};





module.exports = SessionController;