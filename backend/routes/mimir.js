import express from "express";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post(
  "/analyze",
  upload.fields([
    { name: "firmware", maxCount: 1 },
    { name: "datasheet", maxCount: 1 },
    { name: "pcbImage", maxCount: 1 },
    { name: "serialLog", maxCount: 1 },
    { name: "telemetry", maxCount: 1 },
    { name: "config", maxCount: 1 },
  ]),
  (req, res) => {
    console.log("Files received:")
    console.log(req.files);
    res.json({
      success: true,
      files: req.files,
      message: "Files uploaded successfully!",
    });
  }
);

export default router;