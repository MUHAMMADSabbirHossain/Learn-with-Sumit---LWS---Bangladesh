// external modules
const express = require(`express`);
const router = express.Router();

// internal modules
const renderHtmlResponse = require(`../middlewares/modules/renderHtmlResponse`);
const { getLogin } = require(`../controllers/login`);

const page_title = `Login`;

router.get(`/`, renderHtmlResponse({ page_title }), getLogin);

router.post(`/`, function (req, res) {

});

module.exports = router;