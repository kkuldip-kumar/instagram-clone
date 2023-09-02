const User = require("../models/userModel");
const Post = require("../models/postModel");
const catchAsync = require("../middlewares/catchAsync");
const ErrorHandler = require("../utils/errorHandler");
const Exception = require("../utils/custom-exceptions");
const { sendErrorResponse } = require("../utils/sendErrorResponse");
const yup = require("yup");
// signUp user methods
// Define validation schema
const schema = yup.object().shape({
  name: yup.string().min(3).required("Name is required"),
  email: yup.string().email().required("email is required"),
  password: yup.string().required("Password is required"),
  username: yup.string().required("Username is required"),
});
exports.signupUser = catchAsync(async (req, res, next) => {
  try {
    const { name, email, username, password } = await schema.validate(req.body);
    const user = await User.findOne({ email });
    // console.log("user", user);
    if (user && user.email === email) {
      // return next(new ErrorHandler("Email already exists", 401));
      sendErrorResponse(
        res,
        { message: { error: "Email already exists" } },
        400
      );
      // return res.status(400).json({ error: "Email already exists" });
    }
    console.log("first");
    const newUser = await User.create({
      name,
      email,
      username,
      password,
    });
    res.status(200).json({
      message: "signup successful",
      data: newUser,
    });
  } catch (error) {
    // Handle validation error
    console.log(error);
    res.status(400).json({ error: error.errors });
  }
});
// login user

exports.loginUser = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email })
    .populate("followers")
    .populate("following")
    .select("+password");

  if (!user) {
    return next(new ErrorHandler("User doesn't exist", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("password mismatch", 401));
  }
  const token = user.generateToken();
  res.status(201).json({
    message: "login successful",
    data: user,
    token: token,
  });
});

// get all posts
exports.getUsersPosts = async (req, res) => {
  try {
    const userId = req.params.userId;

    // Find all posts where the 'postedBy' field matches the user's ID
    const userPosts = await Post.find({ postedBy: userId })
      .populate("postedBy", "name avatar followers")
      .populate({
        path: "comments",
        populate: {
          path: "user",
          select: "name avatar",
        },
      });
    if (!userPosts.length) {
      return res.status(404).json({
        message: "no data found",
      });
    }
    res.status(200).json({
      message: "User posts retrieved successfully",
      data: userPosts,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving user posts" });
  }
};

// get All Users

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();
  if (!users.length) {
    return res.status(404).json({
      message: "no data found",
    });
  }
  res.status(200).json({
    data: users,
  });
});

// follow the user

exports.followUser = async (req, res) => {
  const userGoingToFollow = await User.findById(req.params.id);
  const loggedInUser = await User.findById(req.user._id);
  if (!loggedInUser) {
    res.status(404).json({
      message: "user not logged in",
    });
  }

  if (loggedInUser.following.includes(userGoingToFollow._id)) {
    const indexOfFollowing = loggedInUser.following.indexOf(
      userGoingToFollow._id
    );
    const indexOfFollower = userGoingToFollow.followers.indexOf(
      loggedInUser._id
    );
    loggedInUser.following.splice(indexOfFollowing, 1);
    userGoingToFollow.followers.splice(indexOfFollower, 1);
    await loggedInUser.save();
    await userGoingToFollow.save();

    res.status(200).json({
      success: true,
      message: "User Unfollowed",
    });
  } else {
    loggedInUser.following.push(userGoingToFollow._id);
    userGoingToFollow.followers.push(loggedInUser._id);
    await loggedInUser.save();
    await userGoingToFollow.save();

    res.status(200).json({
      success: true,
      message: "User Followed",
    });
  }
};

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email: email });

  if (!user) {
    res.status(404).json({
      message: "user not found",
    });
  } else {
    const resetPasswordToken = await user.getResetPasswordToken();
    await user.save();

    const resetPasswordUrl = `https:${req.get(
      "host"
    )}/api/password/reset/${resfreshPasswordToken}`;

    try {
      await sendEmail({
        email: user.email,
        templateId: process.env.SENDGRID_RESET_TEMPLATEID,
        data: {
          reset_url: resetPasswordUrl,
        },
      });

      res.status(200).json({
        success: true,
        message: `Email sent to ${user.email}`,
      });
    } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpiry = undefined;

      await user.save({ validateBeforeSave: false });
      return next(new ErrorHandler(error.message, 500));
    }
  }
};

//reset password

exports.resetPassword = async (req, res) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpiry: { $gt: Date.now() },
  });

  if (!user) {
    res.status(404).json({
      message: "user not found",
    });
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();
  res.status(200).json({
    message: "ok",
    data: user,
  });
};
