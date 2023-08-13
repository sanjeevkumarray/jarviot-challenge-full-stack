import React, { useState } from "react";
import api from "../services/api";

const RevokeAccessButton = () => {
  const [isRevoked, setIsRevoked] = useState(false);

  const handleRevokeAccess = async () => {
    try {
      // Call the backend API to revoke Google Drive access
      await api.post("/auth/revoke");
      // Handle success: Update the state to show the access is revoked
      setIsRevoked(true);
    } catch (error) {
      console.error("Error revoking Google Drive access:", error);
    }
  };

  return (
    <div>
      {isRevoked ? (
        <p>Google Drive access has been revoked.</p>
      ) : (
        <button onClick={handleRevokeAccess}>Revoke Google Drive Access</button>
      )}
    </div>
  );
};

export default RevokeAccessButton;
