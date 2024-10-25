const { getUser } = require("../service/auth");

const checkForAuthentication = (req, res, next) => {
  const tokenCookie = req.cookies?.token;

  req.user = null;

  if (!tokenCookie) return next();

  const token = tokenCookie;
  const user = getUser(token);
  req.user = user;
  return next();
};

const restrictTo = (roles = []) => {
  return (req, res, next) => {
    if (!req.user) return res.redirect("/login");

    if (!roles.includes(req.user.role)) return res.end("UnAuthorized");

    return next();
  };
};

// const restrictToLoggedinUserOnly = async (req, res, next) => {
//   const userUid = req.headers["Authorization"];
//   // const userUid = req.cookies?.uid;
//   if (!userUid) return res.redirect("/login");
//   const token = userUid.split("Bearer ")[1];
//   const user = getUser(token);
//   // const user = getUser(userUid);
//   if (!user) return res.redirect("/login");

//   req.user = user;
//   next();
// };

// const checkAuth = async (req, res, next) => {
//   const userUid = req.headers["Authorization"];
//   // const userUid = req.cookies?.uid;
//   const token = userUid.split("Bearer ")[1];
//   const user = getUser(token);
//   // const user = getUser(userUid);

//   req.user = user;
//   next();
// };

module.exports = {
  checkForAuthentication,
  restrictTo,
  // restrictToLoggedinUserOnly,
  // checkAuth,
};
