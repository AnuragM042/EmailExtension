// src/components/EmailInput.jsx
import React, { useState } from "react";
import axios from "axios";

const EmailInput = ({ selectedProfile }) => {
  const [senderEmail, setSenderEmail] = useState("");
  const [receiverEmail, setReceiverEmail] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:5000/api/send-email", {
        profile: selectedProfile,
        senderEmail,
        receiverEmail,
      });
      alert("Email sent");
    } catch (error) {
      console.error("Error sending email:", error);
    }
    setSenderEmail("");
    setReceiverEmail("");
  };

  return (
    <div className="email-input">
      <input
        type="email"
        placeholder="Sender's Email"
        value={senderEmail}
        onChange={(e) => setSenderEmail(e.target.value)}
        className="input"
      />
      <input
        type="email"
        placeholder="Receiver's Email"
        value={receiverEmail}
        onChange={(e) => setReceiverEmail(e.target.value)}
        className="input"
      />
      <button onClick={handleSubmit} className="button">
        Send Email
      </button>
    </div>
  );
};

export default EmailInput;
