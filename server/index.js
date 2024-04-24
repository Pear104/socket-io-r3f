const express = require("express");
const { createServer } = require("node:http");
const { join } = require("node:path");
const { Server } = require("socket.io");

// const app = express();
// const server = createServer(app);
const io = new Server({
  cors: {
    origin: "http://localhost:5173",
  },
});

io.listen(3001);

const characters = [];

const random = (min, max) => {
  return Math.random() * (max - min) + min;
};

io.on("connection", (socket) => {
  console.log("a user connected");
  characters.push({
    id: socket.id,
    position: [0, 0.52, 0],
  });
  console.log(characters);
  socket.emit("hello");
  io.emit("characters", characters);
  // socket.on("hello", (msg) => {
  // });
  socket.on("disconnect", () => {
    console.log("user disconnected");
    characters.splice(
      characters.findIndex((char) => char.id === socket.id),
      1
    );
    io.emit("characters", characters);
  });
});
