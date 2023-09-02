const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
// import routes
const user = require("./routes/userRoutes");
const post = require("./routes/postRoutes");
const message = require("./routes/messageRoute");
const chat = require("./routes/chatRoute");
const comment = require("./routes/commentRoutes");

const dbSetup = require("./config/database");
const socketio = require("socket.io");

dotenv.config();
const port = process.env.PORT || 4000;
dbSetup();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(
  cors({
    // origin: "http://localhost:5173",
    origin: "https://instgram.onrender.com/",
  })
);
let users = [];

app.use("/api", chat);
app.use("/api", message);
app.use("/api", user);
app.use("/api", post);
app.use("/api", comment);

const server = app.listen(port, () => {
  console.log("listening on server " + port);
});

// Socket Configuration
const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:5173",
  },
});

// Socket Connection
io.on("connection", (socket) => {
  console.log("Connected to socket io.");

  socket.on("setup", (userData) => {
    console.log("setup event", userData);
    socket.join(userData._id);
    console.log(userData._id + " connected to the socket");
    socket.emit("connected");
  });

  socket.on("join chat", (roomId) => {
    ``;
    socket.join(roomId);
    console.log("User joined the room: " + roomId);
  });

  socket.on("new_message", (message) => {
    console.log("new message", message);
    io.emit("message_received", message);
    // let chat = message.chat;
    // console.log(chat);

    if (!message.users) {
      return console.log("message.users not defined");
    }
    message.users.forEach((user) => {
      console.log(user._id === message.senderId);
      if (user._id === message.senderId) return;
      socket.in(user._id).emit("message_received", message);
    });
  });
});
