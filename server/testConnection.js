import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURI = process.env.MONGODB_URI;

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB");
    mongoose.disconnect(); // Disconnect after successful connection
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
