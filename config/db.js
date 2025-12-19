const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    // FIX: switched from local MongoDB to Atlas using env variable

    console.log("MongoDB connected (Atlas)");
  } catch (error) {
    console.error("MongoDB connection failed");
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
