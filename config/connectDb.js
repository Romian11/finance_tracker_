const mongoose = require("mongoose");
const colors = require("colors");
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Server Running On ${mongoose.connection.host}`.bgCyan.white);
    console.log("connection successfull");
  } catch (error) {
    console.log(`error : ${error}`.bgRed);
  }
};

module.exports = connectDb;
