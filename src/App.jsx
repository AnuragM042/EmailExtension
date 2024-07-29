import React from "react";
import { ApiKeyProvider } from "./contexts/ApiKeyContext";
import ApiKeyForm from "./components/ApiKeyForm";
import EmailForm from "./components/EmailForm"; // Your existing EmailForm component

const App = () => {
  return (
    <ApiKeyProvider>
      <div className="App">
        <h1>Email Extension</h1>
        <ApiKeyForm />
        <EmailForm />
      </div>
    </ApiKeyProvider>
  );
};

export default App;
