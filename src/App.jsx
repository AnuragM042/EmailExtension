import React from "react";
import { ApiKeyProvider } from "./context/ApiKeyContext";
import LoginForm from "./components/LoginForm";
import EmailForm from "./components/EmailForm";
import ProfileList from "./components/ProfileList";
import ProfileForm from "./components/ProfileForm";

const App = () => {
  return (
    <ApiKeyProvider>
      <div>
        <h1>Email Extension</h1>
        <LoginForm />
        <EmailForm />
        <ProfileList />
        <ProfileForm />
      </div>
    </ApiKeyProvider>
  );
};

export default App;
