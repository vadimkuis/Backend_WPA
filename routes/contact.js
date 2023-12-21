const express = require('express');
const ContactController = require('../controllers/contact');

const router = express.Router();

router.get('/', ContactController.getContact);

module.exports = router;