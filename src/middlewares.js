const jwt = require('jsonwebtoken');

function notFound(req, res, next) {
  res.status(404);
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
  next(error);
}

/* eslint-disable no-unused-vars */
function errorHandler(err, req, res, next) {
  /* eslint-enable no-unused-vars */
  // console.log('status', res.statusCode);
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  // eslint-disable-next-line no-console
  console.log(err);
  // res.send({
  //   message: err.message,
  //   details: err.meta.details,
  //   stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
  // });
  res.sendStatus(500);
}

const joiValidation = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (err) {
    res.status(422);
    next(err);
  }
};

const authentication = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const { userId } = decodedToken;
    if (req.body.userId && req.body.userId !== userId) {
      // eslint-disable-next-line no-throw-literal
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!'),
    });
  }
};

module.exports = {
  notFound,
  errorHandler,
  joiValidation,
  authentication,
};
