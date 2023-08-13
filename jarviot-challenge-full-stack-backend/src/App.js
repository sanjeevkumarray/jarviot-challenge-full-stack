import React from "react";
import "./App.css"; // You can create a CSS file for styling (App.css)
import DriveAnalytics from "./components/DriveAnalytics";
import RevokeAccessButton from "./components/RevokeAccessButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Google Drive Risk Report</h1>
      </header>
      <main className="App-main">
        <div className="App-analytics">
          <h2>Drive Analytics</h2>
          <DriveAnalytics />
        </div>
        <div className="App-revoke">
          <h2>Access Management</h2>
          <RevokeAccessButton />
        </div>
      </main>
      <footer className="App-footer">
        <p>Powered by Your Company</p>
      </footer>
    </div>
  );
}

export default App;
