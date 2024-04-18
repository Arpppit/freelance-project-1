const express = require('express');
const router = express.Router();
const timetableController = require('../controllers/TimetableController');
const upload = require('../controllers/fileUpload');

router.post('/', upload.single('pdf'), timetableController.createTimetable);
router.get('/', timetableController.getTimetables);
router.get('/:id', timetableController.getTimetableById);
router.put('/:id', upload.single('pdf'), timetableController.updateTimetable);
router.delete('/:id', timetableController.deleteTimetable);

module.exports = router;
