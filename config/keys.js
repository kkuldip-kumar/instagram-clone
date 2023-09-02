module.exports = {
  database: {
    url: `mongodb+srv://KuldipNodeDemo:${process.env.MONGODB_URI_PSW}@kuldip.z0qyrtn.mongodb.net/${process.env.MONGODB_URI_DB}?retryWrites=true&w=majority`,
  },
};
