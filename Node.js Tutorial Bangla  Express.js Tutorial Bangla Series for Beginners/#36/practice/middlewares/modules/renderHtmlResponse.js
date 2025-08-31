module.exports = function ({ page_title }) {
    return function (req, res, next) {
        res.locals.html = true;

        res.locals.app = {
            title: process.env.APP_TITLE,
            name: process.env.APP_NAME
        };

        res.locals.page = {
            title: page_title
        };
        next();
    };
};