import Patient from "../models/Patient.js";

export const createPatient = async (req, res) => {
  const patient = await Patient.create(req.body);
  res.status(201).json(patient);
};

export const getPatients = async (req, res) => {
  res.json(await Patient.find());
};
