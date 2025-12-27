import express from "express";
import { appointmentReport } from "../controllers/reportController.js";

const router = express.Router();

router.get("/appointments", appointmentReport);

export default router;
