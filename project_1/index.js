const express = require("express");
const { connectMongoDB } = require("./connection");

const { logReqRes } = require("./middlewares/index");

// const users = require("./MOCK_DATA.json");

const userRoutes = require("./routes/user");

const app = express();
const PORT = 5000;

//connection
connectMongoDB("mongodb://127.0.0.1:27017/mongoDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error", err));

// middleware - plugin;
app.use(express.urlencoded({ extended: false }));

app.use(logReqRes("log.txt"));

//Routes
app.use("/api/users", userRoutes);

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
