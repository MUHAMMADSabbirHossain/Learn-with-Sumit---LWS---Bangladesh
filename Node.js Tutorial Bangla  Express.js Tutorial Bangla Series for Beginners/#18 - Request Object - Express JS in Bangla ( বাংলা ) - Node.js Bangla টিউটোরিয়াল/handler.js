const handler = function (req, res) {
    console.log(req.baseUrl);
    console.log(req.originalUrl);
    console.log(req.url);
    console.log(req.path);
    console.log(req.hostname);
    console.log(req.ip);
    console.log(req.method);
    console.log(req.protocol);
    console.log(req.params);
    console.log(req.query);
    console.log(req.cookies);
    console.log(req.secure);
    console.log(req.app.get(`view engine`));
    console.log(req.accepts(`json`));
    console.log(req.get(`content-type`));




    res.send(`hello world`);
};

module.exports = handler