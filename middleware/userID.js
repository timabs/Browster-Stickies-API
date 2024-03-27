const uIDMiddleware = (req, res, next) => {
  const userId = req.headers["x-user-id"];
  req.userId = userId;
  next();
};

module.exports = uIDMiddleware;
