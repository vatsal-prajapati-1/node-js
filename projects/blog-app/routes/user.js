const { Router } = require("express");

const {
  handleUserSignIn,
  handleUserSignUp,
  handleCreateNewUser,
  handleGenerateNewUser,
  handleUserLogout,
} = require("../controllers/user");

const router = Router();

router.get("/signin", handleUserSignIn);

router.get("/signup", handleUserSignUp);

router.post("/signin", handleGenerateNewUser);

router.post("/signup", handleCreateNewUser);

router.get("/logout", handleUserLogout);

module.exports = router;
