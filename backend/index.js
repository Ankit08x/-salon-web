const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const messageRoutes = require('./routes/messageRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/appointmentDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("✅ MongoDB connected");
}).catch((err) => {
  console.log("❌ MongoDB connection error:", err);
});

// Message Routes
app.use('/messages', messageRoutes);

// Start server
app.listen(3001, () => {
  console.log("🚀 Server is running on port 3001");
});
