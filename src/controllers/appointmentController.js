import Appointment from "../models/Appointment.js";

export const bookAppointment = async (req, res) => {
  const { doctor, patient, date, timeSlot } = req.body;

  const alreadyBooked = await Appointment.findOne({
    doctor,
    date,
    timeSlot,
    status: "booked"
  });

  if (alreadyBooked) {
    return res.status(400).json({ message: "Slot already booked" });
  }

  const appointment = await Appointment.create({
    doctor,
    patient,
    date,
    timeSlot
  });

  res.status(201).json(appointment);
};

export const cancelAppointment = async (req, res) => {
  const appointment = await Appointment.findById(req.params.id);

  if (!appointment) {
    return res.status(404).json({ message: "Appointment not found" });
  }

  appointment.status = "cancelled";
  await appointment.save();

  res.json({ message: "Appointment cancelled", appointment });
};

export const getAppointmentsByDay = async (req, res) => {
  const date = new Date(req.params.date);

  const appointments = await Appointment.find({ date })
    .populate("doctor patient");

  res.json(appointments);
};
