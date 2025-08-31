// external modules
const express = require(`express`);
const router = express.Router();

// internal modules
const renderHtmlResponse = require(`../middlewares/modules/renderHtmlResponse`);
const { getTodos } = require(`../controllers/todos`);

const page_title = `Todos`;

router.get(`/`, renderHtmlResponse({ page_title }), getTodos);

module.exports = router;