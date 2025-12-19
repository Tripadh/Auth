// models/User.js

const mongoose = require("mongoose");
// FIX: import mongoose to define schema

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // FIX: email field with validation

  password: {
    type: String,
    required: true,
  },
  // FIX: password field (hashed later)
});
// FIX: defining user schema structure

const User = mongoose.model("User", userSchema);
// FIX: creating model from schema

module.exports = User;
// FIX: exporting User model
