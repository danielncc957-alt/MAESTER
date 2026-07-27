import express from "express";

const router = express.Router();

router.post("/analyze", (req, res) => {
  res.json({
    success: true,
    message: "Analyze endpoint reached successfully!",
  });
});

export default router;