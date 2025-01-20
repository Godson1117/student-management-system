const express = require('express');
const { assignTask, viewTasks, updateTaskStatus } = require('../controllers/taskController');
const router = express.Router();

router.post('/assign', assignTask);
router.get('/:studentId', viewTasks);
router.put('/:taskId/status', updateTaskStatus);

module.exports = router;
