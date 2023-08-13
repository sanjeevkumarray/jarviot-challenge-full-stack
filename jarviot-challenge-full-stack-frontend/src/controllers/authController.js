const { generateAuthUrl, revokeAccess } = require("../services/googleDriveService");

exports.getAuthUrl = (req, res) => {
  try {
    const authUrl = generateAuthUrl();
    res.json({ authUrl });
  } catch (error) {
    console.error("Error generating auth URL:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.revokeAccess = (req, res) => {
  try {
    revokeAccess();
    res.status(204).end();
  } catch (error) {
    console.error("Error revoking access:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
