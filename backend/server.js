import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import mimirRoutes from "./routes/mimir.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🚀 MAESTER Backend Running",
  });
});

app.use("/api/mimir", mimirRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});