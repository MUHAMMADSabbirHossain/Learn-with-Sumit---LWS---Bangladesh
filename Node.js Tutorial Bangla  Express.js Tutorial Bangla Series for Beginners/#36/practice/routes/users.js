// external modules
const express = require(`express`);
const router = express.Router();

// internal modules
const renderHtmlResponse = require(`../middlewares/modules/renderHtmlResponse`);
const { getUsers } = require(`../controllers/users`);

const page_title = `Users`;

router.get(`/`, renderHtmlResponse({ page_title }), getUsers);

module.exports = router;