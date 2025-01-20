const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Student = require('../models/student');

// Admin Login
const adminLogin = async (req, res) => {
  const { email, password } = req.body;
  if (email === 'admin@admin.com' && password === 'admin') {
    const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.json({ message: 'Admin logged in', token });
  } else {
    return res.status(400).json({ message: 'Invalid credentials' });
  }
};

// Student Login
const studentLogin = async (req, res) => {
  const { email, password } = req.body;
  const student = await Student.findOne({ email });
  if (!student) {
    return res.status(400).json({ message: 'Student not found' });
  }

  const isMatch = await bcrypt.compare(password, student.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ studentId: student._id, role: 'student' }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ message: 'Student logged in', token });
};

module.exports = { adminLogin, studentLogin };
