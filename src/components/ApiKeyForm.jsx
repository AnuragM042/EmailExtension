import React, { useState } from "react";
import { useApiKeys } from "../contexts/ApiKeyContext";

const ApiKeyForm = () => {
  const { saveApiKeys } = useApiKeys();
  const [apiKey, setApiKey] = useState("");
  const [apiSecret, setApiSecret] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    saveApiKeys(apiKey, apiSecret);
    alert("API keys saved successfully!");
  };

  return (
    <div>
      <h2>Enter Mailjet API Keys</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Mailjet API Key:</label>
          <input
            type="text"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mailjet API Secret:</label>
          <input
            type="text"
            value={apiSecret}
            onChange={(e) => setApiSecret(e.target.value)}
            required
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default ApiKeyForm;
