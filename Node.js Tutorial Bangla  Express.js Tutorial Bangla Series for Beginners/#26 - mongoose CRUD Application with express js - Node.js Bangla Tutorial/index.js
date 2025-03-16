const express = require('express');
const app = express();
const mongoose = require('mongoose');
const todoHandler = require('./routeHandler/todoHandler');

app.use(express.json());

// database connection with mongoose
mongoose.connect(`mongodb://localhost:27017/todos`, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
})
    .then(function () {
        console.log('Database connected successfully');
    })
    .catch(function (error) {
        console.log(error);
    })

// application routes
app.use(`/todo`, todoHandler);

// default error handler
function errorHandler(error, req, res, next) {
    if (res.headersSent) {
        return next(error);
    }
    res.status(500).json({ error: error.message });
}

app.listen(3000, function () {
    console.log('Server is running on port 3000');
});