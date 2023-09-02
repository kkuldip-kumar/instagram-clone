const Post = require("../models/postModel");
const User = require("../models/userModel");
const { Comment } = require("../models/commentModel");
const dotenv = require("dotenv");
dotenv.config();

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const catchAsync = require("../middlewares/catchAsync");
const ErrorHandler = require("../utils/errorHandler");
const uploadToCloudinary = async (file) => {
  try {
    const result = await cloudinary.uploader.upload(file, {
      upload_preset: "insta_posts",
    });
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to upload file to Cloudinary");
  }
};

// Create New Post
exports.newPost = catchAsync(async (req, res, next) => {
  let fileURL = "";
  try {
    const result = await uploadToCloudinary(req.file.path);
    fileURL = result.secure_url;
  } catch (error) {
    res.status(500).send("Failed to upload file");
  }
  if (!fileURL || !req.body.caption) return;
  const postData = {
    caption: req.body.caption,
    image: fileURL,
    postedBy: req.user._id,
  };

  const post = await Post.create(postData);

  const user = await User.findById(req.user._id);
  user.posts.push(post._id);
  await user.save();

  res.status(201).json({
    success: true,
    post,
  });
});

// get all posts
exports.allPosts = async (req, res) => {
  const posts = await Post.find()
    .populate("postedBy", "name avatar followers")
    .populate({
      path: "comments",
      populate: {
        path: "user",
        select: "name avatar",
      },
    });
  if (!posts.length) {
    return res.status(404).json({
      message: "no data found",
    });
  }
  res.status(200).json({
    data: posts,
  });
};

// update a post

exports.updatePost = async (req, res) => {
  const id = req.params.id;
  const post = await Post.findById(id);
  if (!post) {
    res.status(404).json({
      message: "post not found",
    });
  }
  if (post.postedBy.toString() === req.user._id.toString()) {
    post.caption = req.body.caption;
  }
  await post.save();
  res.status(200).json({
    message: "post is updated successfully",
    data: post,
  });
};

// remove a post

exports.removePost = async (req, res) => {
  const id = req.params.id;
  await Post.findByIdAndDelete(id)
    .then((post) => {
      if (!post) {
        res.status(401).json({
          message: "Post not found",
        });
      } else {
        res.status(200).json({
          message: "Post deleted successfully",
        });
      }
    })
    .catch((error) => {
      res.status(401).json({ error: error.message });
    });
};

// exports.deletePost = async (req, res) => {
//   try {
//     const postId = req.params.postId;

//     // Delete the post and its comments
//     const deletedPost = await Post.findByIdAndDelete(postId).populate("comments");
//     if (!deletedPost) {
//       return res.status(404).json({ message: "Post not found" });
//     }

//     // Delete the comments and their replies
//     const commentsToDelete = deletedPost.comments;
//     for (const comment of commentsToDelete) {
//       await Reply.deleteMany({ _id: { $in: comment.replies } });
//     }
//     await Comment.deleteMany({ _id: { $in: commentsToDelete } });

//     res.status(200).json({
//       message: "Post and associated comments/replies deleted successfully",
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error deleting post" });
//   }
// };

// Get Post Details

exports.postDetails = async (req, res) => {
  const id = req.params.id;
  const post = await Post.findById(id).populate({
    path: "comments",
    populate: {
      path: "user",
      select: "name avatar",
    },
    populate: {
      path: "likes",
    },
    populate: {
      path: "replies",
    },
  });
  if (!post) {
    res.status(404).json({
      message: "No post found",
    });
  }
  res.status(200).json({
    message: "OK",
    data: post,
  });
};

// add new comment
// exports.addNewComment = async (req, res) => {
//   const id = req.params.id;
//   const post = await Post.findById(id);
//   if (!post) {
//     res.status(404).json({
//       message: "post not found",
//     });
//   }

//   post.comments.push({
//     user: req.user._id,
//     comment: req.body.comment,
//   });
//   await post.save();
//   res.status(200).json({
//     message: "comment added successfully",
//     data: post,
//   });
// };

exports.addNewComment = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const { message } = req.body;
    const newComment = new Comment({
      message: message,
      user: req.user._id,
      post: post._id, // Associate the comment with the corresponding post
    });
    const savedComment = await newComment.save();
    post?.comments?.push(savedComment._id);
    await post.save();

    res.status(200).json({
      message: "Comment added successfully",
      data: savedComment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding comment" });
  }
};

// like unlike a post
exports.likeUnlikePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    res.status(404).json({
      message: "post not found",
    });
  }

  if (post.likes.includes(req.user._id)) {
    const postLikedIndex = post.likes.indexOf(req.user._id);
    post.likes.splice(postLikedIndex, 1);
    await post.save();
    res.status(200).json({
      message: "post unliked successfully",
      data: post,
    });
  } else {
    post.likes.push(req.user._id);
    await post.save();
    res.status(200).json({
      message: "post liked successfully",
      data: post,
    });
  }
};

// save unsave a post

exports.saveUnSavePost = async (req, res) => {
  const id = req.params.id;
  const post = await Post.findById(id);
  const loggedInUser = await User.findById(req.user._id);
  if (!post || !loggedInUser) {
    res.status(404).json({
      message: "post not found",
    });
  }
  if (loggedInUser.saved.includes(post._id.toString())) {
    const postSavedIndex = post.savedBy.indexOf(req.user._id);
    post.savedBy.splice(postSavedIndex, 1);
    loggedInUser.saved.pop(post._id);
    await post.save();
    await loggedInUser.save();
    res.status(200).json({
      message: "post Unsaved successfully",
      data: post,
    });
  } else {
    post.savedBy.push(req.user._id);
    loggedInUser.saved.push(post._id);
    await post.save();
    await loggedInUser.save();
    res.status(200).json({
      message: "post saved successfully",
      data: post,
    });
  }
};

// Posts of i m Following
exports.postsFollowing = async (req, res) => {
  const user = await User.findById(req.user._id);
  const currentPage = Number(req.query.page) || 1;

  const skipPosts = 4 * (currentPage - 1);
  const totolPosts = await Post.find({
    postedBy: {
      $in: user.following,
    },
  }).countDocuments();

  const posts = await Post.find({
    postedBy: {
      $in: user.following,
    },
  })
    .populate("postedBy likes")
    .populate({ path: "comments", populate: { path: "user" } })
    .sort({ createdAt: -1 })
    .limit(4)
    .skip(skipPosts);

  res.status(200).json({
    success: true,
    posts: posts,
    totolPosts,
  });
};
