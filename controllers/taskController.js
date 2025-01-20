const Task = require('../models/task');
const Student = require('../models/student');

// Admin Assign Task
const assignTask = async (req, res) => {
  const { studentId, description, dueTime } = req.body;
  const task = new Task({ student: studentId, description, dueTime });
  await task.save();
  res.status(201).json({ message: 'Task assigned' });
};

// Student View Tasks
const viewTasks = async (req, res) => {
  const { studentId } = req.params;
  const tasks = await Task.find({ student: studentId });
  res.json(tasks);
};

// Student Update Task Status
const updateTaskStatus = async (req, res) => {
  const { taskId } = req.params;
  const { status } = req.body;

  if (!['pending', 'overdue', 'completed'].includes(status)) {
    return res.status(400).json({ message: 'Invalid status' });
  }

  const task = await Task.findById(taskId);
  task.status = status;
  await task.save();
  res.json({ message: 'Task status updated' });
};

module.exports = { assignTask, viewTasks, updateTaskStatus };
