import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import profileRoutes from "./routes/profileRoutes.js";
import { sendEmail } from "./email.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
connectDB();
console.log("MongoDB URL", process.env.MONGODB_URI);
// mongoose
//   .connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((error) => {
//     console.error("Error connecting to MongoDB:", error);
//   });

app.use("/api/profiles", profileRoutes);

app.post("/api/send-email", async (req, res) => {
  const { profile, senderEmail, receiverEmail } = req.body;
  try {
    await sendEmail(profile, senderEmail, receiverEmail);
    res.status(200).send("Email sent");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 5175;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
