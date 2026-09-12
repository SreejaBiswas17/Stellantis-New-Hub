import express from "express";
import cors from "cors";
import amsRouter from "./src/domains/ai-for-ams/routes.js";
import engineeringRouter from "./src/domains/engineering-leaders/routes.js";
import adRouter from "./src/domains/ai-for-ad/routes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Request logging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// Domain Routes Separation (Zero Merge Conflicts Architecture)
// 1. Vishnu: AI for AMS (Tony - Head of AMS)
app.use("/api/ams", amsRouter);

// 2. Sreeja: Engineering Leaders (Alex - Chief AI Officer)
app.use("/api/engineering", engineeringRouter);

// 3. Lavanya: AI for AD (Product Owner)
app.use("/api/ad", adRouter);

// Health check & hub metadata
app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    application: "AI-Native Engineering Operating Model Hub",
    activeDomains: [
      { id: "ai-for-ams", name: "AI for AMS", owner: "Vishnu", persona: "Tony - Head of AMS", path: "/api/ams" },
      { id: "engineering-leaders", name: "Engineering Leaders", owner: "Sreeja", persona: "Alex - Chief AI Officer", path: "/api/engineering" },
      { id: "ai-for-ad", name: "AI for AD", owner: "Lavanya", persona: "Product Owner", path: "/api/ad" }
    ],
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(` AI-Native Engineering Operating Model Hub - Backend`);
  console.log(` Server running on http://localhost:${PORT}`);
  console.log(` AMS Domain:         http://localhost:${PORT}/api/ams`);
  console.log(` Engineering Domain: http://localhost:${PORT}/api/engineering`);
  console.log(` AD Domain:          http://localhost:${PORT}/api/ad`);
  console.log(`====================================================`);
});
