const express = require("express");

const URL = require("../models/url");
const { restrictTo } = require("../middlewares/auth");

const route = express.Router();

route.get("/admin/urls", restrictTo(["ADMIN"]), async (req, res) => {
  const allUrls = await URL.find({});
  return res.render("home", {
    urls: allUrls,
  });
});

route.get("/", restrictTo(["NORMAL", "ADMIN"]), async (req, res) => {
  // if (!req.user) return res.redirect("/login");
  const allUrls = await URL.find({ createdBy: req.user._id });
  // const allUrls = await URL.find({});
  return res.render("home", {
    urls: allUrls,
  });
});

route.get("/signup", (req, res) => {
  return res.render("signup");
});

route.get("/login", (req, res) => {
  return res.render("login");
});

module.exports = route;
