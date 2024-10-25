const mongoose = require("mongoose");

const connectMongoDB = async (url) => {
  //connection
  return mongoose.connect(url);
  // .connect("mongodb://127.0.0.1:27017/mongoDB")
};

module.exports = {
  connectMongoDB,
};
