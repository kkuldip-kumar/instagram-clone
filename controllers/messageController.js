const Chat = require("../models/chatModel");
const Message = require("../models/messageModel");

exports.newMessage = async (req, res) => {
  const { chatId, content } = req.body;
  const messageData = {
    sender: req.user._id,
    chatId,
    content,
  };
  const message = await Message.create(messageData);
  if (!message) {
    res.status(400).json({ message: "Message could not be created" });
  } else {
    await Chat.findByIdAndUpdate(chatId, { latestMessage: message });
    res.status(201).json({
      message: "Message created successfully",
      data: message,
    });
  }
};

exports.getAllMessages = async (req, res) => {
  const chatId = req.params.id;
  console.log(chatId);

  const messages = await Message.find({ chatId: chatId });

  if (!messages) {
    res.status(404).json({
      message: "No messsage found",
    });
  }
  res.status(200).json({
    success: "ok",
    data: messages,
  });
};
