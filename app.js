// const dotenv = require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const pdfRoute = require('./routes/pdfRoutes.js');
// const auth = require('./routes/auth.js');
// const cors = require('cors');
// const mail = require('./routes/mail.js');
// const favouriteRoute = require('./routes/favorite.js');
// const dashboardRoute = require('./routes/dashboard.js');
// const multer = require('multer');
// const cloudinary = require('cloudinary').v2;
// const axios = require('axios');
// const FormData = require('form-data');
// const fs = require('fs');
// const path = require('path');

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use("/niko",pdfRoute);
// app.use("/niko/v1",auth);
// app.use("/niko/v1",mail);
// app.use("/niko/v1",favouriteRoute);
// app.use("/niko/v1",dashboardRoute);


// mongoose.connect(process.env.MONGODB_URI)
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('MongoDB connection error:', err));

// // Start server
// const PORT = process.env.PORT || 5000;

// // ---------- Serve React ----------
// const __dirname = path.resolve();

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "my-app/build")));

//   app.get("*", (req, res) => {
//     res.sendFile(
//       path.join(__dirname, "my-app/build", "index.html")
//     );
//   });
// }


// app.listen(PORT, "0.0.0.0", () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });

// app.js
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Routes
import auth from "./routes/auth.js";
import pdfRoute from "./routes/pdfRoutes.js";
import mail from "./routes/mail.js";
import favouriteRoute from "./routes/favorite.js";
import dashboardRoute from "./routes/dashboard.js";

// ---------------- ES Modules __dirname fix ----------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ----------------- App setup -----------------
const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// ----------------- MongoDB Connection -----------------
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// ----------------- API Routes -----------------
// app.use("/niko", pdfRoute);
// app.use("/niko/v1", authRoute);
// app.use("/niko/v1", mailRoute);
// app.use("/niko/v1", favouriteRoute);
// app.use("/niko/v1", dashboardRoute);
// app.use("/niko/v1", uploadRoute);
// app.use("/niko/v1", virusRoute);

app.use(cors());
app.use(express.json());
app.use("/niko",pdfRoute);
app.use("/niko/v1",auth);
app.use("/niko/v1",mail);
app.use("/niko/v1",favouriteRoute);
app.use("/niko/v1",dashboardRoute);





// ----------------- Serve React in Production -----------------
if (process.env.NODE_ENV === "production") {
  const reactBuildPath = path.join(__dirname, "my-app/build");

  // Serve static files
  app.use(express.static(reactBuildPath));

  // Catch-all route for React (must be last)
  app.get("*", (req, res) => {
    res.sendFile(path.join(reactBuildPath, "index.html"));
  });
}

// ----------------- Start Server -----------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});








