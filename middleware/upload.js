// require("dotenv").config();
// const multer = require('multer');
// const path = require('path');

// // Configure Multer disk storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null,file.originalname);
//   }
// });

// const upload = multer(
// {
//  storage: storage,
//  limits: {
//     fileSize: 10 * 1024 * 1024
//   }
// });

// module.exports = upload;


import dotenv from "dotenv";
import multer from "multer";
import path from "path";

dotenv.config();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
});

export default upload;


