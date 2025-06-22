const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const appointmentRoutes = require('./routes/appointmentRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/appointmentDB', {
}).then(() => {
  console.log("✅ MongoDB connected");
}).catch((err) => {
  console.log("❌ MongoDB connection error:", err);
});

app.use('/app', appointmentRoutes); // http://localhost:3001/app

app.listen(3001, () => {
  console.log("🚀 Server is running on port 3001");
});
