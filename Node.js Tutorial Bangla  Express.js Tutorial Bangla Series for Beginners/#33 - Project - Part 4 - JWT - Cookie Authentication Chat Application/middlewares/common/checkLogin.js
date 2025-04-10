const jwt = require('jsonwebtoken');

const checkLogin = function (req, res, next) {
    let cookies = Object.keys(req.signedCookies).length > 0 ? req.signedCookies : null;

    if (cookies) {
        try {
            token = cookies[process.env.COOKIE_NAME];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;

            // pass user info to response locals
            if (res.locals.html) {
                res.locals.loggedInUser = decoded;
            }

            next();
        } catch (error) {
            if (res.locals.html) {
                res.redirect('/');
            } else {
                res.status(500).json({
                    errors: {
                        common: {
                            msg: 'Authentication failed!'
                        }
                    }
                })
            }
        }
    } else {
        if (res.locals.html) {
            res.redirect('/');
        } else {
            res.status(401).json({
                error: 'Authentication failed!'
            });
        }
    }
};

const redirectLoggedIn = function (req, res, next) {
    let cookies = Object.keys(req.signedCookies).length > 0 ? req.signedCookies : null;

    if (!cookies) {
        next();
    } else {
        res.redirect('/inbox');
    }
};

module.exports = {
    checkLogin,
    redirectLoggedIn,
};