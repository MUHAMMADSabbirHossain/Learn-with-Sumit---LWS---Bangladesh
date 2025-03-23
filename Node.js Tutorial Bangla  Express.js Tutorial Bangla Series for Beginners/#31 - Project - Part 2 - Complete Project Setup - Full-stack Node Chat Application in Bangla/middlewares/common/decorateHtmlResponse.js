function decorateHtmlResponse(pageName) {
    return function (req, res, next) {
        res.locals.html = true;
        res.locals.title = `${pageName} - ${process.env.APP_NAME}`;
        next();
    }
}

module.exports = decorateHtmlResponse;