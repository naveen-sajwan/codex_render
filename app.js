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

// ----------------- App setup -----------------
const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ----------------- MongoDB Connection -----------------
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/niko",pdfRoute);
app.use("/niko/v1",auth);
app.use("/niko/v1",mail);
app.use("/niko/v1",favouriteRoute);
app.use("/niko/v1",dashboardRoute);


// ----------------- Serve React in Production -----------------

app.get("/", (req,res) => {
  app.use(express.static(path.resolve(__dirname,"my-app","build")));
  res.sendFile(path.resolve(__dirname,"my-app","build","index.html"));
});

// ----------------- Start Server -----------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});








