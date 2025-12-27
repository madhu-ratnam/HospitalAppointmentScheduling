import Appointment from "../models/Appointment.js";

export const appointmentReport = async (req, res) => {
  const total = await Appointment.countDocuments();
  const booked = await Appointment.countDocuments({ status: "booked" });
  const cancelled = await Appointment.countDocuments({ status: "cancelled" });

  res.json({
    totalAppointments: total,
    booked,
    cancelled
  });
};
