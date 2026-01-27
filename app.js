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

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

// routes
import pdfRoute from "./routes/pdfRoutes.js";
import auth from "./routes/auth.js";
import mail from "./routes/mail.js";
import favouriteRoute from "./routes/favorite.js";
import dashboardRoute from "./routes/dashboard.js";

// optional deps (keep if used elsewhere)
import multer from "multer";
import cloudinary from "cloudinary";
import axios from "axios";
import FormData from "form-data";
import fs from "fs";

dotenv.config();

const app = express();


// ---------- Middleware ----------
// app.use(cors());
app.use(express.json());

// ---------- Routes ----------
app.use("/niko", pdfRoute);
app.use("/niko/v1", auth);
app.use("/niko/v1", mail);
app.use("/niko/v1", favouriteRoute);
app.use("/niko/v1", dashboardRoute);

// ---------- MongoDB ----------
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// ---------- Serve React ----------
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "my-app/build")));

  // Serve React's index.html on all unmatched routes
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "my-app/build", "index.html"));
  });
}


// ---------- Start Server (Render-safe) ----------
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});







