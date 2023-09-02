const mongoose = require("mongoose");

const dbSetup = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database Connected !");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = dbSetup;
