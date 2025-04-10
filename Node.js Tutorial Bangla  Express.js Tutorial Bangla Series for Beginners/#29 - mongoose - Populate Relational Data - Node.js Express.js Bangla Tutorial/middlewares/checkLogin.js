const jwt = require('jsonwebtoken');

const checkLogin = async function (req, res, next) {
    try {
        const { authorization } = req.headers;
        const token = authorization.split(` `)[1];
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        const { username, userId } = decoded;

        req.username = username;
        req.userId = userId;

        next();
    } catch (error) {
        next(`Authentication failed!`);
    }
};

module.exports = checkLogin;