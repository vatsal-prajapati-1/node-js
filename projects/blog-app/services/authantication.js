const JWT = require("jsonwebtoken");

const createTokenForUser = (user) => {
  const payload = {
    _id: user._id,
    email: user.email,
    profileImage: user.profileImage,
    role: user.role,
  };

  const token = JWT.sign(payload, process.env.secret);
  return token;
};

const validateToken = (token) => {
  const payload = JWT.verify(token, process.env.secret);
  return payload;
};

module.exports = {
  createTokenForUser,
  validateToken,
};
