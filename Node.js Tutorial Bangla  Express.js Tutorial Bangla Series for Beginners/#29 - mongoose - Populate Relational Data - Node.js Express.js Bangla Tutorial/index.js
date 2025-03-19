const express = require(`express`);
const app = express();
const todoHandler = require(`./routeHandlers/todoHandler`);
const mongoose = require(`mongoose`);
const userHandler = require(`./routeHandlers/userHandler`);
const dotenv = require(`dotenv`);

dotenv.config();

app.use(express.json());
app.use(`/todo`, todoHandler);
app.use(`/user`, userHandler);

(async function () {
    try {
        const result = await mongoose.connect(`mongodb://localhost:27017/todos`);
        // console.log(result); 
        console.log(`Mongoose is connected successfully.`);
    } catch (error) {
        console.log(error);
    }
})();

app.get(`/`, function (req, res) {
    res.send(`Testing...`);
});

app.listen(3000, function () {
    console.log(`Server is running on port 3000.`);
});