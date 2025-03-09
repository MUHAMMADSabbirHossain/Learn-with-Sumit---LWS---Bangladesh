const handle = function (req, res) {
    console.log(req.app.locals.title);
    res.send(`This is home page`);
};

module.exports = handle;