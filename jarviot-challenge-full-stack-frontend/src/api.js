
const API_URL = "http://localhost:5000"; 

export async function fetchDataFromBackend() {
  try {
    const response = await fetch(`${API_URL}/api/data`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data from backend:", error);
    throw error;
  }
}
