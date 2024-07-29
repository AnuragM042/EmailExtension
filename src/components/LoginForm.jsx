import React, { useState } from "react";
import { useApiKey } from "../context/ApiKeyContext";

const LoginForm = () => {
  const { setApiKey, setApiSecret } = useApiKey();
  const [key, setKey] = useState("");
  const [secret, setSecret] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setApiKey(key);
    setApiSecret(secret);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>API Key:</label>
        <input
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          required
        />
      </div>
      <div>
        <label>API Secret:</label>
        <input
          type="text"
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
