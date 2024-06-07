// controllers/authController.js
const router = require("express").Router();
const authService = require("../services/authService");

async function signup(req, res) {
  const { email, password, first_name, last_name } = req.body;
  try {
    await authService.signup(email, password, first_name, last_name);
    res.status(201).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function login(req, res) {
  const { email, password } = req.body;
  try {
    const userId = await authService.login(email, password);
    res.status(200).json({ userId });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}

module.exports = { signup, login };
