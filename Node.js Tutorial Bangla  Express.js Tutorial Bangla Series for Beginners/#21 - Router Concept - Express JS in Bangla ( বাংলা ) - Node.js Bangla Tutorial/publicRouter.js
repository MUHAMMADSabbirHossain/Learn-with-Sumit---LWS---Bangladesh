const express = require(`express`);
const adminRouter = require("./adminRouter");
const publicRouter = express.Router();

// const log = function (req, res, next) {
//     console.log(`I am logging middleware...`);
//     next();
// };

// publicRouter.all(`*`, log);

// publicRouter.param(`user`, function (req, res, next, id) {
//     req.user = id === `1` ? `Admin` : `Anonymous`;
//     console.log(`I am called once!`);
//     next();
// });

// publicRouter.get(`/:user`, function (req, res, next) {
//     console.log(`This also matches...`);
//     next();
// });

// publicRouter.param(function (param, option) {
//     return function (req, res, next, val) {
//         if (val === option) {
//             next();
//         } else {
//             res.sendStatus(403);
//         }
//     };
// });

// publicRouter.param(`user`, `12`);

// publicRouter.get(`/:user`, function (req, res) {
//     // res.send(`Home ${req.user}`);
//     res.send(`Hello Admin`)
// });

// publicRouter.get(`/about`, function (req, res) {
//     res.send(`About`);
// });

// publicRouter
//     .route(`/user`)
//     .all(function (req, res, next) {
//         console.log(`I am logging something...`);
//         next();
//     })
//     .get(function (req, res) {
//         res.send(`GET`);
//     })
//     .post(function (req, res) {
//         res.send(`POST`);
//     })
//     .put(function (req, res) {
//         res.send(`PUT`);
//     })
//     .delete(function (req, res) {
//         res.send(`DELETE`);
//     });

// publicRouter.use(function (req, res, next) {
//     console.log(`Logging`);
//     next();
// });

// publicRouter.use(adminRouter);

module.exports = publicRouter;