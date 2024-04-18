const express = require('express');
const router = express.Router();
const topperlistController = require('../controllers/TopperlistController');
const upload = require('../controllers/fileUpload');

router.post('/', upload.single('pdf'), topperlistController.createTopperlist);
router.get('/', topperlistController.getTopperlists);
router.get('/:id', topperlistController.getTopperlistById);
router.put('/:id', upload.single('pdf'), topperlistController.updateTopperlist);
router.delete('/:id', topperlistController.deleteTopperlist);

module.exports = router;
