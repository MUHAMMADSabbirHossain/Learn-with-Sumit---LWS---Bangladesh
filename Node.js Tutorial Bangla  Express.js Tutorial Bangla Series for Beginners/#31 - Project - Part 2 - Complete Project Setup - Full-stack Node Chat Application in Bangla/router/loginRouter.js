// extarnal import
const express = require('express');

// internal imports
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');

// internal imports
const { getLogin } = require('../controller/loginController');

const router = express.Router();

// login page
router.get('/', decorateHtmlResponse('login'), getLogin);

module.exports = router;