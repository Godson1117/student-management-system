const express = require('express');
const { addStudent } = require('../controllers/studentController');
const router = express.Router();

router.post('/add', addStudent);

module.exports = router;
