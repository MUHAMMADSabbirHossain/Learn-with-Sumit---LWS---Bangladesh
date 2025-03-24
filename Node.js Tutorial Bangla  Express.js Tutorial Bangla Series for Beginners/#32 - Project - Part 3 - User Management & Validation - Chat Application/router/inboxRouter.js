// extarnal modules
const express = require('express');
const router = express.Router();

// internal modules
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');
const { getInbox } = require('../controller/inboxController');

router.get('/', decorateHtmlResponse('inbox'), getInbox);

module.exports = router;