// server/models/Profile.js
import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  info: { type: String, required: true },
  attachments: { type: Array, default: [] },
});

const Profile = mongoose.model("Profile", profileSchema);
export default Profile;
