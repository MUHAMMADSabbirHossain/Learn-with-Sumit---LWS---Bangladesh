// extarnal import
const express = require('express');

// internal imports
const { getInbox } = require('../controller/inboxController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');

const router = express.Router();

console.log('inbox routerasdfsd');


// login page
router.get('/', decorateHtmlResponse(`Inbox`), getInbox);

module.exports = router;