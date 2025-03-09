const express = require(`express`);
const app = require(`express`)();
const adminRoute = require(`express`).Router();
const cookieParser = require(`cookie-parser`);
const handler = require(`./handler`);

app.use(`/admin`, adminRoute);
app.use(express.json());
app.use(cookieParser());

// app.get(`/user/:id`, function (req, res) {
//     console.log(req.baseUrl);
//     console.log(req.originalUrl);
//     console.log(req.url);
//     console.log(req.path);
//     console.log(req.hostname);
//     console.log(req.ip);
//     console.log(req.method);
//     console.log(req.protocol);
//     console.log(req.params);
//     console.log(req.query);
//     console.log(req.cookies);
//     console.log(req.secure);


//     res.send(`hello world`);
// });

app.get(`/user/:id`, handler);

app.get(`/user`, function (req, res) {
    console.log(req.body);
    console.log(req.query);
    console.log(req.route);


    res.send(`user get`);
});

app.post(`/user`, function (req, res) {
    console.log(req.body);
    console.log(req.query);
    console.log(req.route);


    res.send(`user posted`);
});

adminRoute.get(`/dashboard`, function (req, res) {
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


    res.send(`We are in admin dashboard`);
});

app.listen(3000, function () {
    console.log(`listening to port 3000`);
});