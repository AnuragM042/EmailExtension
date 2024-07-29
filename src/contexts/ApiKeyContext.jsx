import React, { createContext, useState, useContext } from "react";

const ApiKeyContext = createContext();

export const ApiKeyProvider = ({ children }) => {
  const [apiKey, setApiKey] = useState(
    localStorage.getItem("MAILJET_API_KEY") || ""
  );
  const [apiSecret, setApiSecret] = useState(
    localStorage.getItem("MAILJET_API_SECRET") || ""
  );

  const saveApiKeys = (key, secret) => {
    localStorage.setItem("MAILJET_API_KEY", key);
    localStorage.setItem("MAILJET_API_SECRET", secret);
    setApiKey(key);
    setApiSecret(secret);
  };

  return (
    <ApiKeyContext.Provider value={{ apiKey, apiSecret, saveApiKeys }}>
      {children}
    </ApiKeyContext.Provider>
  );
};

export const useApiKeys = () => useContext(ApiKeyContext);
