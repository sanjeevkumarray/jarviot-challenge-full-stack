import React, { useState, useEffect } from "react";
import api from "../services/api";

const DriveAnalytics = () => {
  const [analyticsData, setAnalyticsData] = useState(null);

  const fetchAnalytics = async () => {
    try {
      // Call the backend API to fetch Google Drive analytics
      const response = await api.get("/drive/analytics");
      setAnalyticsData(response.data);
    } catch (error) {
      console.error("Error fetching analytics:", error);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  return (
    <div>
      {analyticsData ? (
        <div>
          <h2>Google Drive Analytics</h2>
          <p>Total Files: {analyticsData.totalFiles}</p>
          <p>Total Storage Used: {analyticsData.totalStorageUsed} MB</p>
          <h3>File Type Distribution:</h3>
          <ul>
            {Object.entries(analyticsData.fileTypeDistribution).map(
              ([fileType, count]) => (
                <li key={fileType}>
                  {fileType}: {count}
                </li>
              )
            )}
          </ul>
          <h3>Top 5 Largest Files:</h3>
          <ul>
            {analyticsData.topLargestFiles.map((file) => (
              <li key={file.id}>
                <a href={file.link} target="_blank" rel="noopener noreferrer">
                  {file.name}
                </a>{" "}
                - Size: {file.size} MB
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading analytics...</p>
      )}
    </div>
  );
};

export default DriveAnalytics;
