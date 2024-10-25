const http = require("http");

const express = require("express");

const path = require("path");

const app = express();
const PORT = 9000;

const server = http.createServer(app);

const { Server } = require("socket.io");

const io = new Server(server);

app.use(express.static(path.resolve("./public")));

//socket.io
io.on("connection", (socket) => {
  socket.on("user-message", (message) => {
    // console.log("A new user message", message);
    io.emit("message", message);
  });
});

app.get("/", (req, res) => {
  return res.sendFile("/public/index.html");
});

server.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
