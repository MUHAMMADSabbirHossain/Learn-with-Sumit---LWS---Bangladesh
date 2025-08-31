// external modules
const express = require(`express`);
const router = express.Router();

// internal modules
const renderHtmlResponse = require(`../middlewares/modules/renderHtmlResponse`);
const { getChats } = require(`../controllers/chats`);

const page_title = `Chats`;

router.get(`/`, renderHtmlResponse({ page_title }), getChats);

module.exports = router;