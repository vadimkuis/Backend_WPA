const express = require('express');
const AboutController = require('../controllers/about');

const router = express.Router();

router.get('/', AboutController.getAbout);

module.exports = router;