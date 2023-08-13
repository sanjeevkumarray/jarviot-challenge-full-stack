import React from "react";
import api from "../services/api";

const AuthButton = () => {
  const handleAuthClick = async () => {
    try {
      // Call the backend API to initiate the OAuth flow
      const response = await api.get("/auth/link");
      // Redirect the user to the Google OAuth consent screen
      window.location.href = response.data.authUrl;
    } catch (error) {
      console.error("Error linking Google Drive:", error);
    }
  };

  return (
    <button onClick={handleAuthClick}>Link Google Drive</button>
  );
};

export default AuthButton;
