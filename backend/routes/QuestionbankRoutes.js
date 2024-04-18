const express = require('express');
const router = express.Router();
const questionbankController = require('../controllers/QuestionbankController');
const upload = require('../controllers/fileUpload');

router.post('/', upload.single('pdf'), questionbankController.createQuestionbank);
router.get('/', questionbankController.getQuestionbanks);
router.get('/:id', questionbankController.getQuestionbankById);
router.put('/:id', upload.single('pdf'), questionbankController.updateQuestionbank);
router.delete('/:id', questionbankController.deleteQuestionbank);

module.exports = router;
