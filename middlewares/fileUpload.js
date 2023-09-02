const path = require("path");
const multer = require("multer");
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads");
//   },
//   filename: (req, file, cb) => {
//     console.log(file);
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });
// const uploadFile = multer({ storage: storage });
// module.exports = uploadFile;
// Function to initialize Multer and configure file upload
const configureMulter = (destination) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, destination);
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });

  return multer({ storage: storage });
};

module.exports = configureMulter;
