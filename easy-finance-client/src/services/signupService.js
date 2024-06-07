// services/signupService.js
import axios from "axios";

const API_URL = "http://localhost:3001/api/auth"; // Your backend API URL

async function signup(email, password, first_name, last_name) {
  try {
    await axios.post(`${API_URL}/signup`, {
      email,
      password,
      first_name,
      last_name,
    });
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}

export default signup;
