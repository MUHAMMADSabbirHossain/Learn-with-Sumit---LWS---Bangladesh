const express = require('express');
const app = express();
const route = express.Router({
    caseSensitive: true
});
const handle = require('./handle');
const admin = express();

app.use(express.json());
app.use(express.raw());
app.use(express.text());
app.use(express.urlencoded());
app.use(express.static(`${__dirname}/public/`, { index: 'home.html' }));
app.use(route);
app.locals.title = `My App`;
app.set(`view engine`, `ejs`);

// app.get(`/`, handle);
app.get(`/`, function (req, res) {
    res.send(`This is home page`);
});

app.post(`/`, function (req, res) {
    console.log(req.body);
    console.log(typeof req.body);
    console.log(req.body.toString());

    res.send(`This is home page with post request`);
});

app.put(`/`, function (req, res) {
    res.send(`Welcome to put request`);
});

app.route(`/about/mission`)
    .get(function (req, res) {
        res.render(`pages/about`)
    })
    .post(function (req, res) {
        res.send(`Welcome to about page with post request`);
    })
    .put(function (req, res) {
        res.send(`Welcome to about page with put request`);
    })
    .delete(function (req, res) {
        res.send(`Welcome to about page with delete request`);
    });


app.get(`/user/:id`, function (req, res) {
    console.log(req.params.id);
    res.send(`This is user page with id: ${req.params.id}`);
    console.log(req.userDetails);
});

app.param(`id`, function (req, res, next, id) {
    console.log(req.params.id);
    const user = {
        userid: id,
        name: `Bangladesh`
    };
    req.userDetails = user;
    next();
});

app.use(`/admin`, admin);

admin.on('mount', function (parent) {
    console.log('Admin Mounted')
    console.log({ parent }) // refers to the parent app
})

admin.get(`/`, function (req, res) {
    res.send(`This is admin page`);
});

admin.get(`/dashboard`, function (req, res) {
    console.log(admin.mountpath);

    res.send(`Welcome to admin dashboard`);
});


app.listen(3000, function (req, res) {
    console.log(`listening on port 3000`);
});