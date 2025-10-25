import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import cors from "cors";
import connectDb from "./utils/db.js";

// Routes
import courseRoute from "./routes/course.route.js";
import userRoute from "./routes/user.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// --------- Middlewares ---------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);
app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL
    credentials: true, // allow cookies
  })
);

// --------- Debug logging ---------
app.use((req, res, next) => {
  console.log("🌍 Request:", req.method, req.originalUrl);
  next();
});

// --------- Routes ---------
app.use("/api/v1/user", userRoute);      // User auth
app.use("/api/v1/course", courseRoute);  // Courses

// Health check
app.get("/", (req, res) => {
  res.send("✅ Backend is running...");
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.originalUrl} not found` });
});

// --------- DB connect + Start server ---------
connectDb()
  .then(() => {
    console.log("✅ MongoDB connected successfully");
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err);
    process.exit(1);
  });
