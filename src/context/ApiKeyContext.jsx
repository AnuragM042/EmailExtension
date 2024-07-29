import React, { createContext, useState, useContext } from "react";

export const ApiKeyContext = createContext();

export const ApiKeyProvider = ({ children }) => {
  const [apiKey, setApiKey] = useState("");
  const [apiSecret, setApiSecret] = useState("");

  return (
    <ApiKeyContext.Provider
      value={{ apiKey, setApiKey, apiSecret, setApiSecret }}
    >
      {children}
    </ApiKeyContext.Provider>
  );
};

export const useApiKey = () => useContext(ApiKeyContext);
