const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('../routes/authRoutes');
const studentRoutes = require('../routes/studentRoutes');
const taskRoutes = require('../routes/taskRoutes');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Failed to connect to MongoDB', err));

// Routes
app.get('/', (req, res) => {
  res.json({message:'Welcome to the Student Management API'});
});

app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/tasks', taskRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
