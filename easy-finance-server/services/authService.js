// services/authService.js
const bcrypt = require("bcrypt");
const User = require("../models/User");
const connection = require("../config/connection");

async function signup(email, password, first_name, last_name) {
  const user = new User({ email, password, first_name, last_name });
  try {
    const newUser = await User.create({
      email,
      password,
      first_name,
      last_name,
    });
    console.log("NEW USER REGISTERED AND SAVED INTO DATABASE ");
    return User;
  } catch (error) {
    console.error("Error creating user:", error); // Log the specific error
    throw new Error("Error creating user");
  }
}

async function login(email, password) {
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new Error("User not found");
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new Error("Incorrect password");
    }

    return user.id;
  } catch (error) {
    throw error;
  }
}

module.exports = { signup, login };
