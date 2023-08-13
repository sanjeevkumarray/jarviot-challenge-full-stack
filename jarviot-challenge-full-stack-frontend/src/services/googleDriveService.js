const { google } = require("googleapis");
const credentials = require("../../config/authConfig.json"); // Your Google OAuth 2.0 credentials
const { OAuth2Client } = require("google-auth-library");

const auth = new google.auth.OAuth2(
  credentials.clientId,
  credentials.clientSecret,
  credentials.redirectUri
);

exports.generateAuthUrl = () => {
  const authUrl = auth.generateAuthUrl({
    access_type: "offline",
    scope: ["https://www.googleapis.com/auth/drive.readonly"],
  });
  return authUrl;
};

exports.revokeAccess = (refreshToken) => {
  // Create an OAuth2Client instance using the refresh token
  const oauth2Client = new OAuth2Client({
    clientId: credentials.clientId,
    clientSecret: credentials.clientSecret,
  });

  oauth2Client.revokeToken(refreshToken, (err, response) => {
    if (err) {
      console.error("Error revoking Google Drive access:", err.message);
    } else {
      console.log("Google Drive access revoked successfully.");
    }
  });
};

exports.getDriveAnalytics = async (accessToken) => {
  // Create an OAuth2Client instance using the access token
  const oauth2Client = new OAuth2Client();
  oauth2Client.setCredentials({ access_token: accessToken });

  // Implement fetching Google Drive analytics
  try {
    // Example: Retrieve a list of files from Google Drive
    const drive = google.drive({ version: "v3", auth: oauth2Client });
    const response = await drive.files.list({
      pageSize: 10,
      fields: "nextPageToken, files(id, name)",
    });
    return response.data.files;
  } catch (error) {
    console.error("Error fetching Google Drive analytics:", error);
    throw error;
  }
};
