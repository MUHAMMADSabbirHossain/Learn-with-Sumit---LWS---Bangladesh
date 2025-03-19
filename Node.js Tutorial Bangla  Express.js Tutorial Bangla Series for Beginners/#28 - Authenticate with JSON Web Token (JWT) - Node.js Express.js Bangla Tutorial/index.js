const express = require('express');
const mongoose = require('mongoose');
const dotenv = require(`dotenv`);
const app = express();
const todoHandler = require(`./routeHandlers/todoHandler`);
const userHandler = require(`./routeHandlers/userHandler`);

dotenv.config();
app.use(express.json());

mongoose.connect(`mongodb://localhost:27017/todos`)
    .then(function () {
        console.log(`database is connected successfully.`);
    })
    .catch(function (err) {
        console.log(`database is not connected successfully.`, err);
    });

app.use(`/todo`, todoHandler);
app.use(`/user`, userHandler);

const errorHandler = function (error, req, res, next) {
    if (res.headersSent) {
        return next(error);
    }
    res.status(500).send({ custom: 'something went wrong', error });
};
app.use(errorHandler);

app.listen(3000, function () {
    console.log(`express is running on port 3000...`);
});