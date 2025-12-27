import express from "express";
import {
  bookAppointment,
  cancelAppointment,
  getAppointmentsByDay
} from "../controllers/appointmentController.js";

const router = express.Router();

router.post("/book", bookAppointment);
router.put("/:id/cancel", cancelAppointment);
router.get("/day/:date", getAppointmentsByDay);

export default router;
