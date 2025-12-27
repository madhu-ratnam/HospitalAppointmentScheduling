import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  experience: Number,
  availableDays: [String],
  timeSlots: [String],
  consultationFee: Number
});

export default mongoose.models.Doctor ||
mongoose.model("Doctor", doctorSchema);
