const express = require('express');
const router = express.Router();
const previouspaperController = require('../controllers/PreviouspaperController');
const upload = require('../controllers/fileUpload');

router.post('/', upload.single('pdf'), previouspaperController.createPreviouspaper);
router.get('/', previouspaperController.getPreviouspapers);
router.get('/:id', previouspaperController.getPreviouspaperById);
router.put('/:id', upload.single('pdf'), previouspaperController.updatePreviouspaper);
router.delete('/:id', previouspaperController.deletePreviouspaper);

module.exports = router;
