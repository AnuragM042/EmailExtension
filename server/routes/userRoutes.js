// server/routes/userRoutes.js
import express from "express";

const router = express.Router();

// Save API keys for a user
router.post("/save-api-keys", (req, res) => {
  const { apiKey, apiSecret } = req.body;

  // Save the keys in the user's profile or secure storage
  // For example, in a database or an encrypted file

  // This is a placeholder; implement secure storage as needed
  req.user.apiKey = apiKey;
  req.user.apiSecret = apiSecret;

  res.status(200).json({ message: "API keys saved" });
});

export default router;
