// services/loginService.js
import axios from "axios";

const API_URL = "http://localhost:3001/api/auth"; // Your backend API URL

async function login(email, password) {
  try {
    await axios.post(`${API_URL}/login`, { email, password });
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}

export default login;
