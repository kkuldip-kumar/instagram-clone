const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const messageSchema = new Schema(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    chatId: {
      type: Schema.Types.ObjectId,
      ref: "Chat",
    },
    content: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema);
