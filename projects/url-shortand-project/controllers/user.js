const { v4: uuidv4 } = require("uuid");
const User = require("../models/user");
const { setUser } = require("../service/auth");

const handleUserSignup = async (req, res) => {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  return res.redirect("/");
};

const handleUserLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user)
    return res.render("login", {
      error: "Invalid Username or Password",
    });

  // const sessionId = uuidv4();
  // setUser(sessionId, user);
  const token = setUser(user);
  res.cookie("token", token);
  // res.cookie("uid", token);
  // res.cookie("uid", sessionId);
  return res.redirect("/");
  // return res.json({ token });
  // return res.redirect("/");
};

module.exports = {
  handleUserSignup,
  handleUserLogin,
};
