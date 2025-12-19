require("dotenv").config();
// FIX: load environment variables FIRST
const cors = require("cors");
// FIX: import CORS middleware

const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
// FIX: importing auth routes

const app = express();
app.use(cors());
// FIX: allow frontend (localhost:3000) to access backend

app.use(express.json());
// FIX: middleware to parse JSON

connectDB();
// FIX: connect to MongoDB Atlas

app.use("/api/auth", authRoutes);
// FIX: mounting auth routes (THIS IS CRITICAL)

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
