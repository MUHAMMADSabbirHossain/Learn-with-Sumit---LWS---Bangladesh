const express = require('express');
const app = express();
const adminRouter = express.Router();
const cookieParser = require('cookie-parser');

const myMiddleware = function (req, res, next) {
    console.log(`I am logging...`);
    next();
};

// const myMiddleware1 = function (req, res, next) {
//     console.log(`I am logging 1...`);
//     next();
// };

// const myMiddleware2 = function (req, res, next) {
//     console.log(`I am logging 2...`);
//     next();
// };

const loggerWrapper = function (options) {
    return function (req, res, next) {
        console.log(options);

        if (options.log) {
            console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl} - ${req.headers['user-agent']} - ${req.protocol} - ${req.ip}`);

            next();
        } else {
            throw new Error(`Failed to log...`);
        }
    }
};

const logger = function (req, res, next) {
    console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl} - ${req.headers['user-agent']} - ${req.protocol} - ${req.ip}`);

    // next(`test`);

    // res.end();

    next();

    // throw new Error(`This is an Error.`);
};

app.use(myMiddleware);
// app.use(myMiddleware1);
// app.use(myMiddleware2);
app.use(logger);
app.use(`/admin`, adminRouter);
// adminRouter.use(logger);
app.use(cookieParser());
app.use(express.json());
adminRouter.use(loggerWrapper({ log: false }));

adminRouter.get(`/dashboard`, function (req, res) {
    res.send(`Dashboard`);
});

app.get(`/about`, function (req, res) {
    res.send(`About`);
});

const errorMiddleware = function (error, req, res, next) {
    console.log(error.message);
    res.status(500).send(`Something went wrong...`);
};

app.use(errorMiddleware);

app.listen(3000, function () {
    console.log(`express is running on port 3000...`);
});