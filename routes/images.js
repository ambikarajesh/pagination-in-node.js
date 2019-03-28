const express = require('express');
const imageController = require('../controllers/image');
const router = express.Router();
router.get('/', imageController.getImages);
router.get('/image', imageController.getImage);
router.post('/image', imageController.postImage);
module.exports = router;