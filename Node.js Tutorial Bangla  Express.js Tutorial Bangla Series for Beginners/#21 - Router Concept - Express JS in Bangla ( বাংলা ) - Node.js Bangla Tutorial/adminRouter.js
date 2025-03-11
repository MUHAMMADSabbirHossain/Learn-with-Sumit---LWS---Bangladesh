const express = require('express');
const adminRouter = express.Router();

adminRouter.get(`/`, function (req, res) {
    console.log(`Dashboard`);
    res.send(`Dashboard`);
});

adminRouter.get(`/login`, function (req, res) {
    res.send(`Login`);
});

module.exports = adminRouter;