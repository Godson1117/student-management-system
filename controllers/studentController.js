const Student = require('../models/student');

// Admin Adds Student
const addStudent = async (req, res) => {
  const { name, email, department, password } = req.body;
  const existingStudent = await Student.findOne({ email });
  if (existingStudent) {
    return res.status(400).json({ message: 'Student already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const student = new Student({ name, email, department, password: hashedPassword });
  await student.save();
  res.status(201).json({ message: 'Student added successfully' });
};

module.exports = { addStudent };
