const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  description: { type: String, required: true },
  dueTime: { type: Date, required: true },
  status: { type: String, enum: ['pending', 'overdue', 'completed'], default: 'pending' }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
