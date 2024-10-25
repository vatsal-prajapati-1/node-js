const express = require("express");

const {
  handleGenerateNewShortUrl,
  handleGetAnalytics,
} = require("../controllers/url");

const route = express.Router();

route.post("/", handleGenerateNewShortUrl);

route.get("/analytics/:shortId", handleGetAnalytics);

module.exports = route;
