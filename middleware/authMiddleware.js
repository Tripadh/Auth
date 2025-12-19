// middleware/authMiddleware.js

const jwt = require("jsonwebtoken");
// FIX: importing jwt

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    // FIX: reading Authorization header

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }
    // FIX: checking token existence

    const token = authHeader.split(" ")[1];
    // FIX: extracting token from "Bearer <token>"

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // FIX: verifying token

    req.userId = decoded.userId;
    // FIX: attaching userId to request

    next();
    // FIX: allow request to continue
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = authMiddleware;
// FIX: exporting middleware
