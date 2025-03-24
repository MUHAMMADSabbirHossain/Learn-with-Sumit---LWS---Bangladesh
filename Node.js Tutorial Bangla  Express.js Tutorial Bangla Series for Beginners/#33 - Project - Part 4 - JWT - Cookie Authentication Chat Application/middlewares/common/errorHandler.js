// external modules
const createError = require('http-errors');

function notFoundHandler(req, res, next) {
    next(createError(404, 'Your requested content was not found!'));
}

function errorHandler(error, req, res, next) {
    res.status(error.status || 500);

    res.locals.error = process.env.NODE_ENV === 'development' ? error : { message: error.message };
    // console.log(res.locals.error);

    if (res.locals.html) {
        res.render('error', {
            title: 'Error Page'
        });
    } else {
        res.json({
            message: res.locals.error,
        });
    }
}

module.exports = {
    notFoundHandler,
    errorHandler
}