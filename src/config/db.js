import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in .env");
    }
    await mongoose.connect(process.env.MONGO_URI, {
      // options are usually optional with modern mongoose
      // useUnifiedTopology and useNewUrlParser deprecated in new builds
    });
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1); // stop the app if DB connection fails
  }
};

export default connectDB;

//Why: centralizes DB connection so index.js can call it and app files stay clean.