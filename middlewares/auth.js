const ErrorHandler = require("../utils/errorHandler");
const catchAsync = require("./catchAsync");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const isauthenticated = catchAsync(async (req, res, next) => {
  const bearer_token = req.headers.authorization;
  const token = bearer_token.split(" ")[1];
  if (!token) {
    res.status(401).json({
      message: "Please Login to Access",
    });
    // return next(new ErrorHandler("Please Login to Access", 401));
  }
  const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decodedData.id);
  next();
});

module.exports = isauthenticated;
