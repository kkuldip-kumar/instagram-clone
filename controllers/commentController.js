const { Comment, Reply } = require("../models/commentModel");
const User = require("../models/userModel");
const Post = require("../models/postModel");

const dotenv = require("dotenv");
dotenv.config();

const catchAsync = require("../middlewares/catchAsync");
const ErrorHandler = require("../utils/errorHandler");

// get all comments
// exports.allComments = async (req, res) => {
//   const comments = await Comment.find();
//   // .populate("postedBy", "name avatar followers")
//   // .populate({
//   //   path: "comments",
//   //   populate: {
//   //     path: "user",
//   //     select: "name avatar",
//   //   },
//   // });
//   if (!comments.length) {
//     return res.status(404).json({
//       message: "no data found",
//     });
//   }
//   res.status(200).json({
//     data: comments,
//   });
// };

// remove a Comment
exports.removeComment = async (req, res) => {
  try {
    const commentId = req.params.id;
    const comment = await Comment.findById(commentId);

    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    const postId = comment.post; // Assuming you have a field 'post' in the Comment schema referencing the corresponding post

    // Remove the comment from the post's 'comments' array
    const post = await Post.findById(postId);
    console.log("post by commentId: ", post, commentId);
    post.comments = post.comments.filter((id) => id.toString() !== commentId);
    await post.save();

    // Delete the comment and its replies from the Comment model
    await Comment.deleteMany({ _id: { $in: [commentId, ...comment.replies] } });

    res.status(200).json({
      message: "Comment and its replies deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting comment" });
  }
};

// like unlike a Comment
exports.likeUnlikeComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      res.status(404).json({
        message: "comment not found",
      });
    }
    if (comment.likes.includes(req.user._id)) {
      const commentLikedIndex = comment.likes.indexOf(req.user._id);
      comment.likes.splice(commentLikedIndex, 1);
      await comment.save();
      res.status(200).json({
        message: "post unliked successfully",
        data: comment,
      });
    } else {
      comment.likes.push(req.user._id);
      await comment.save();
      res.status(200).json({
        message: "comment liked successfully",
        data: comment,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error like comment" });
  }
};

// remove a Reply
exports.removeReply = async (req, res) => {
  try {
    const replyId = req.params.id;
    const reply = await Reply.findById(replyId);

    if (!reply) {
      return res.status(404).json({ message: "Reply not found" });
    }

    const commentId = reply.comment; // reference comment

    // Remove the reply from the comment's 'replies' array
    const comment = await Comment.findById(commentId);
    comment.replies = comment.replies.filter((id) => id.toString() !== replyId);
    await comment.save();

    // Delete the reply and its likes from the Reply model
    await Reply.deleteMany({ _id: { $in: [replyId, ...reply.likes] } });

    res.status(200).json({
      message: "Reply and its likes deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting reply" });
  }
};
// exports.removeReply = async (req, res) => {
//   const id = req.params.id;
//   await Reply.findByIdAndDelete(id)
//     .then((reply) => {
//       if (!reply) {
//         res.status(401).json({
//           message: "reply not found",
//         });
//       } else {
//         res.status(200).json({
//           message: "reply deleted successfully",
//         });
//       }
//     })
//     .catch((error) => {
//       res.status(401).json({ error: error.message });
//     });
// };

// add new reply

exports.addNewReply = async (req, res) => {
  try {
    const commentId = req.params.id;
    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({ message: "comment not found" });
    }

    const { message } = req.body;

    // Create a new comment instance
    const newReply = new Reply({
      message,
      user: req.user._id,
    });
    const savedReply = await newReply.save();
    console.log("saved reply", savedReply);
    comment.replies.push(savedReply._id);
    await comment.save();

    res.status(200).json({
      message: "Reply added successfully",
      data: savedReply,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding Reply" });
  }
};

// like unlike a reply
exports.likeUnlikeReply = async (req, res) => {
  const reply = await Reply.findById(req.params.id);
  if (!reply) {
    res.status(404).json({
      message: "reply not found",
    });
  }

  if (reply.likes.includes(req.user._id)) {
    const replyLikedIndex = reply.likes.indexOf(req.user._id);
    reply.likes.splice(replyLikedIndex, 1);
    await reply.save();
    res.status(200).json({
      message: "post unliked successfully",
      data: reply,
    });
  } else {
    reply.likes.push(req.user._id);
    await reply.save();
    res.status(200).json({
      message: "reply liked successfully",
      data: reply,
    });
  }
};
