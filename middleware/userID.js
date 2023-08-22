const { v4: generateNewUserId } = require("uuid");

const uIDMiddleware = (req, res, next) => {
  const userId = req.cookies.userId || generateNewUserId();
  res.cookie("userId", userId, {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    domain: ".stickynotes.lol",
    secure: true,
    httpOnly: true,
    sameSite: "none",
  }); // Cookie lasts for 30 days
  req.userId = userId;
  next();
};

module.exports = uIDMiddleware;
