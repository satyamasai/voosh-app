const jwt = require("jsonwebtoken");


const Authentication = (req, res, next) => {
//   console.log(req.headers.authorization,"SA");
  if (!req.headers.authorization) {
    res.send({ msg: "submit the token first..." });
    return;
  }

  const token = req.headers.authorization.split(" ")[1];

  const decoded = jwt.verify(token, "kittu1516");
  const user_id = decoded.user_id;
  if (decoded) {
    req.body.user_id = user_id;
    next();
  } else {
    res.send({ msg: "You are not logged in" });
  }
};

module.exports = {
  Authentication,
};
