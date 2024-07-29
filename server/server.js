import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import profileRoutes from "./routes/profileRoutes.js";
import { sendEmail } from "./email.js";
import connectDB from "./config/db.js";

dotenv.config();

// Check if environment variables are loaded correctly
if (!process.env.MONGODB_URI) {
  console.error("MongoDB URI is not defined in the .env file");
  process.exit(1);
}

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB(); // Ensure that connectDB handles errors internally

// Log MongoDB URL for debugging
console.log("MongoDB URL", process.env.MONGODB_URI);

// Routes
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

// Start server
const PORT = process.env.PORT || 5177;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
