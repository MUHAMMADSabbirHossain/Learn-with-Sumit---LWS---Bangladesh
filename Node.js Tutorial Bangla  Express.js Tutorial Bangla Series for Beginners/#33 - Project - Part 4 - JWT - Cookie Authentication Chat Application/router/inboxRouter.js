// extarnal modules
const express = require('express');
const router = express.Router();

// internal modules
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');
const { getInbox } = require('../controller/inboxController');
const { checkLogin } = require('../middlewares/common/checkLogin');

router.get('/', decorateHtmlResponse('inbox'), checkLogin, getInbox);

module.exports = router;