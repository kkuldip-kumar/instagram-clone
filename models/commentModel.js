const mongoose = require("mongoose");

// Comment Schema
const commentSchema = new mongoose.Schema(
  {
    message: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Replace 'User' with your user schema name
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post", // Replace 'Post' with the name of your Post schema
    },
    replies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Reply",
      },
    ],
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Reply Schema
const replySchema = new mongoose.Schema(
  {
    message: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Replace 'User' with your user schema name
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    comment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);
const Reply = mongoose.model("Reply", replySchema);

module.exports = { Comment, Reply };
