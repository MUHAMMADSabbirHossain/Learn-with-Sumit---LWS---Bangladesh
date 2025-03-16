const express = require(`express`);
const mongoose = require(`mongoose`);
const app = express();
const todoHandler = require(`./routeHandler/todoHandler`);

mongoose.connect(`mongodb://localhost:27017/todos`)
    .then(function () {
        console.log(`database is connected successfully.`);
    })
    .catch(function (err) {
        console.log(`database is not connected successfully.`, err);
    });

app.use(express.json());
app.use(`/todo`, todoHandler);

app.listen(3000, function () {
    console.log(`server is running on port 3000`);
});