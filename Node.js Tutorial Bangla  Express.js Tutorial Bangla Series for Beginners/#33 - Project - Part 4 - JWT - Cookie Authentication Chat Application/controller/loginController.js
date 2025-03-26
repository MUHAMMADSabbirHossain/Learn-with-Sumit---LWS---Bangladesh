// extarnal modules
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const createError = require('http-errors');

// internal modules
const User = require('../models/People');

// get login page
function getLogin(req, res) {
    res.render('index.ejs');
}

// do login
async function login(req, res, next) {
    try {
        // find a user who has this email/username
        const user = await User.findOne({
            $or: [{ email: req.body.username }, { mobile: req.body.username }], // email or mobile
        });

        if (user && user._id) {
            const isValidPassword = await bcrypt.compare(req.body.password, user.password);

            if (isValidPassword) {
                // prepare the user object to generate token
                const userObject = {
                    username: user.name,
                    mobile: user.mobile,
                    email: user.email,
                    role: "user",
                };

                // generate token
                const token = jwt.sign(userObject, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRY });

                // set cookie
                res.cookie(process.env.COOKIE_NAME, token, {
                    maxAge: process.env.JWT_EXPIRY,
                    httpOnly: true,
                    signed: true,
                });

                // set logged in user local identifier
                res.locals.loggedInUser = userObject;

                res.render('inbox');
            } else {
                throw createError('Login failed! Please try again.');
            }
        } else {
            throw createError('Login failed! Please try again.');
        }
    } catch (error) {
        res.render('index', {
            data: {
                username: req.body.username,
            },
            errors: {
                common: {
                    msg: error.message,
                }
            }
        });
    }
}

// do logout
function logout(req, res) {
    res.clearCookie(process.env.COOKIE_NAME);
    res.send("logged out");
}

module.exports = {
    getLogin,
    login,
    logout,
};

