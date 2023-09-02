const Message = require("../models/messageModel");
const Chat = require("../models/chatModel");
const User = require("../models/userModel");

exports.newChat = async (req, res) => {
  const availableChats = await Chat.findOne({
    users: {
      $all: [req.user._id, req.body.receiverId],
    },
  });

  if (availableChats) {
    res.status(200).json({
      message: "ok",
      data: availableChats,
    });
  } else {
    // new Chat

    const newChat = await Chat.create({
      users: [req.user._id, req.body.receiverId],
    });

    res.status(200).json({
      success: true,
      newChat,
    });
  }
};

exports.getAllChats = async (req, res) => {
  const chats = await Chat.find();
  if (!chats) {
    res.status(404).json({
      message: "no chats found",
    });
  } else {
    res.status(200).json({
      message: "ok",
      data: chats,
    });
  }
};
