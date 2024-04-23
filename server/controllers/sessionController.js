

const SessionController = {};

SessionController.startSession = async (req, res, next) => {
  // get username and maybe id from res.body after oauth completed
  const { userName } = res.body;
  const text = `write db query`;
  // create session
  try {
    const result = await db.query(text);
    res.locals.id = result._id; // get id returning from the db;
    return next();

  } catch (error) {
    const err = {
      log: `Error in sessionController.startSession: ${error}`,
      message: 'Error starting a session',
      status: 500,
    };
  }

};

// checking if usser has session running
SessionController.isLoggedIn = async (req, res, next) => {
  // get username and maybe id from res.body after oauth completed
  const { userName } = res.body;
  const text = `write db query`;
  const values = ['values'];
  
  try {
    const result = await db.query(text. values);
    res.locals.id = result._id; // get id returning from the db;
    return next();

  } catch (error) {
    const err = {
      log: `Error in sessionController.startSession: ${error}`,
      message: 'Error starting a session',
      status: 500,
    };
  }

};





module.exports = SessionController;