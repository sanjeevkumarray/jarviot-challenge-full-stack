import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000"; // Adjust the URL to match your backend

const api = axios.create({
  baseURL,
  timeout: 10000, // Adjust the timeout as needed
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
