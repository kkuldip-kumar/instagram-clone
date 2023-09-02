const socketio = require("socket.io");
const express = require("express");

const app = express();
const server = require("http").Server(app);
const io = socketio(server);

const socketSetup = () => {
  let users = [];
  io.listen(4000);
  io.on("connection", (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
    socket.on("message", (data) => {
      console.log("connected");
      io.emit("messageResponse", data);
    });

    //Listens when a new user joins the server
    socket.on("newUser", (data) => {
      //Adds the new user to the list of users
      users.push(data);
      // console.log(users);
      //Sends the list of users to the client
      io.emit("newUserResponse", users);
    });

    socket.on("disconnect", () => {
      console.log("🔥: A user disconnected");
      //Updates the list of users when a user disconnects from the server
      users = users.filter((user) => user.socketID !== socket.id);
      // console.log(users);
      //Sends the list of users to the client
      io.emit("newUserResponse", users);
      socket.disconnect();
    });
  });
};
module.exports = socketSetup;
