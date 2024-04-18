const express = require('express');
const router = express.Router();
const rollListController = require('../controllers/RollListController');
const upload = require('../controllers/fileUpload');

router.post('/', upload.single('pdf'), rollListController.createRollList);
router.get('/', rollListController.getRollLists);
router.get('/:id', rollListController.getRollListById);
router.put('/:id', upload.single('pdf'), rollListController.updateRollList);
router.delete('/:id', rollListController.deleteRollList);

module.exports = router;
