const jwt = require("jsonwebtoken");
const { SECRET } = require("../config/config");

module.exports = function auth() {
  return (req, res, next) => {
    let token = req.cookies["user_session"];

    if (token) {
      jwt.verify(token, SECRET, (err, decoded) => {
        if (err) {
          res.clearCookie("user_session");
        } else {
          req.user = decoded;
          req.user.isAuthenticated = true;
        }
      });
    }
    next();
  };
};
