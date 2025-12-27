import express from "express";
import { createDoctor, getDoctors } from "../controllers/doctorController.js";

const router = express.Router();

router.post("/", createDoctor);
router.get("/", getDoctors);

export default router;
