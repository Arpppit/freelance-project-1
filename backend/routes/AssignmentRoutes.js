const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/AssignmentController');
const upload = require('../controllers/fileUpload');

router.post('/', upload.single('pdf'), assignmentController.createAssignment);
router.get('/', assignmentController.getAssignments);
router.get('/:id', assignmentController.getAssignmentById);
router.put('/:id', upload.single('pdf'), assignmentController.updateAssignment);
router.delete('/:id', assignmentController.deleteAssignment);

module.exports = router;
