const express = require('express');
const router = express.Router();
const activityController = require('../controllers/ActivityController');
const upload = require('../controllers/fileUpload');

router.post('/', upload.single('pdf'), activityController.createActivity);
router.get('/', activityController.getActivitys);
router.get('/:id', activityController.getActivityById);
router.put('/:id', upload.single('pdf'), activityController.updateActivity);
router.delete('/:id', activityController.deleteActivity);

module.exports = router;
