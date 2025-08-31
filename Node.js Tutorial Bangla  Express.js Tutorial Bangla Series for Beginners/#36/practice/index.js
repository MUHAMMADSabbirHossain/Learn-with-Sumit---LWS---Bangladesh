// exclusive modules
const express = require(`express`);
const app = express();
require(`dotenv`).config();
const port = process.env.PORT || 3000;
const path = require(`path`);
const mongoose = require(`mongoose`);

// inclusive modules
const loginRouter = require(`./routes/login`);
const todosRouter = require(`./routes/todos`);
const usersRouter = require(`./routes/users`);
const chatsRouter = require(`./routes/chats`);
const { notFoundHandler, errorHandler } = require(`./middlewares/modules/errorHandler`);


// request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine
app.set(`view engine`, `ejs`);

// set static files
app.use(express.static(path.join(__dirname, `public`)));

// parse cookie
// app.use(cookieParser());

// database connection
mongoose.connect(process.env.MONGOOSE_CONNECTION_STRING)
    .then(function () {
        console.log(`Database is connected successfully.`);
    })
    .catch(function (error) {
        console.log(error);
    });

// routes
app.use(`/`, loginRouter);
app.use(`/todos`, todosRouter);
app.use(`/users`, usersRouter);
app.use(`/chats`, chatsRouter);

// 404 not found handler
app.use(notFoundHandler);

// common error handler
app.use(errorHandler);

//  
app.listen(port, function (req, res) {
    console.log(`The ${process.env.APP_NAME} is running on PORT: ${port}`);
});