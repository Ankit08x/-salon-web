const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

router.post('/', async (req, res) => {
  const { name, phone, message } = req.body;
  try {
    const newAppointment = await Appointment.create({ name, phone, message });
    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create appointment' });
  }
});

module.exports = router;
