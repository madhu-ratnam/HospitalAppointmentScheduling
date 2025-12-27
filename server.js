import express from "express";
import mongoose from "mongoose";
import doctorRoutes from "./src/routes/doctorRoutes.js";
import patientRoutes from "./src/routes/patientRoutes.js";
import appointmentRoutes from "./src/routes/appointmentRoutes.js";
import reportRoutes from "./src/routes/patientRoutes.js";

const app = express();

// dotenv config
import dotenv from "dotenv";
dotenv.config();

// Middleware
app.use(express.json());

// Routes
app.use("/api/doctors", doctorRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/reports", reportRoutes);

// Health Check (Render friendly)
app.get("/", (req, res) => {
  res.send("Hospital Appointment API is running ");
});

// Database + Server Start
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI).then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );
  })
  .catch((err) => {
    console.error("DB connection failed", err);
  });
