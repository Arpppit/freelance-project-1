const express = require('express');
const router = express.Router();
const syllabusController = require('../controllers/SyllabusController');
const upload = require('../controllers/fileUpload');

router.post('/', upload.single('pdf'), syllabusController.createSyllabus);
router.get('/', syllabusController.getSyllabuses);
router.get('/:id', syllabusController.getSyllabusById);
router.put('/:id', upload.single('pdf'), syllabusController.updateSyllabus);
router.delete('/:id', syllabusController.deleteSyllabus);

module.exports = router;
