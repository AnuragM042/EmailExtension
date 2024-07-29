import React, { useState } from "react";
import axios from "axios";
import { useApiKeys } from "../contexts/ApiKeyContext";

const EmailForm = () => {
  const { apiKey, apiSecret } = useApiKeys();
  const [profile, setProfile] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [receiverEmail, setReceiverEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [info, setInfo] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/send-email", {
        profile: { subject, info },
        senderEmail,
        receiverEmail,
        apiKey, // Include API key in the request
        apiSecret, // Include API secret in the request
      });
      setMessage("Email sent successfully!");
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Send Email</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Sender Email:</label>
          <input
            type="email"
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Receiver Email:</label>
          <input
            type="email"
            value={receiverEmail}
            onChange={(e) => setReceiverEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Subject:</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            value={info}
            onChange={(e) => setInfo(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default EmailForm;
