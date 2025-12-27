import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
  patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" },
  date: Date,
  timeSlot: String,
  status: {
    type: String,
    enum: ["booked", "cancelled"],
    default: "booked"
  }
});

export default mongoose.models.Appointment ||
  mongoose.model("Appointment", appointmentSchema);
