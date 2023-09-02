const sendErrorResponse = (res, error, statusCode = 500) => {
  console.error(error);

  const message = statusCode === 500 ? "Internal Server Error" : error.message;

  return res.status(statusCode).json({ message });
};

module.exports = { sendErrorResponse };
