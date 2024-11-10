const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("../config/config");
const { Employee } = require("../models");

const router = express.Router();

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "12345";

const generateToken = (user) => {
  return jwt.sign({ id: user.id, username: user.username }, config.development.jwtSecret, {
    expiresIn: "1h",
  });
};

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const user = { id: 1, username };

    const token = generateToken(user);

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
