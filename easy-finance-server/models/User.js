// models/User.js
const bcrypt = require("bcrypt");
const connection = require("../config/connection"); // Import the config file
const { DataTypes } = require("sequelize");

// Define the User model
const User = connection.define(
  "User",
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    retirement_step: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    savings_amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    contrib_401k: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    hsa_contrib: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    rothira_contrib: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    underscored: true,
  }
);

// Hash the password before saving the user
User.beforeCreate(async (user) => {
  if (user.password) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
  }
});

module.exports = User;
