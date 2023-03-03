const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://jot_aulakh:12345@cluster0.ae6p8of.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Database connection established");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connection;
