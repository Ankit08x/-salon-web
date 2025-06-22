const express = require('express');
const router = express.Router();
const Message = require('../models/message.model');

// POST route to save message
router.post('/', async (req, res) => {
  const { fullname, email, message } = req.body;

  try {
    const newMsg = await Message.create({ fullname, email, message });
    res.status(201).json({ success: true, data: newMsg });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ success: false, error: 'Email or name already exists' });
    }

    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({ success: false, error: messages.join(', ') });
    }

    res.status(500).json({ success: false, error: 'Failed to save message' });
  }
});

module.exports = router;
