const { getDriveAnalytics } = require("../services/googleDriveService");

exports.getDriveAnalytics = async (req, res) => {
  try {
    const analytics = await getDriveAnalytics();
    res.json(analytics);
  } catch (error) {
    console.error("Error fetching Google Drive analytics:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
