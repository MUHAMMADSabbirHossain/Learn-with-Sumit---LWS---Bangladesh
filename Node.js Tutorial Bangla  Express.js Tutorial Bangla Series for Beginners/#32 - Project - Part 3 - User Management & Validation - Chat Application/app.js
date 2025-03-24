// external modules
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');

// internal modules
const { notFoundHandler, errorHandler } = require('./middlewares/common/errorHandler');
const loginRouter = require('./router/loginRouter');
const usersRouter = require('./router/usersRouter');
const inboxRouter = require('./router/inboxRouter');

dotenv.config();

// database connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING)
    .then(() => console.log('Database connection successful.'))
    .catch((error) => console.log(error));

// request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine
app.set('view engine', 'ejs');

// static files
app.use(express.static(path.join(__dirname, '/public')));

// cookie parser
app.use(cookieParser(process.env.COOKIE_SECRET));

// routing setup
app.use('/', loginRouter);
app.use('/users', usersRouter);
app.use('/inbox', inboxRouter);

// 404 not found handler
app.use(notFoundHandler);

// error handler
app.use(errorHandler);

app.listen(process.env.PORT, function () {
    console.log(`${process.env.APP_NAME} Server ${process.env.NODE_ENV} is running on port ${process.env.PORT}.`);
});