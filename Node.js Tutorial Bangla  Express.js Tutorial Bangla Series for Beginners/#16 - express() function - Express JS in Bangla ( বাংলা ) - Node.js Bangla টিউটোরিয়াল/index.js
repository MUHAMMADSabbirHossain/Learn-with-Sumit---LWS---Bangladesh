const express = require(`express`);
const app = express();
const router = express.Router({
    caseSensitive: true,
});

app.use(express.json());
app.use(express.raw());
app.use(express.text());
app.use(express.urlencoded());
app.use(express.static(`${__dirname}/public/`, { index: 'home.html' }));
app.use(router);

app.get(`/`, function (req, res) {
    res.send(`This is home page`);
});

app.post(`/`, function (req, res) {
    console.log(req.body);
    console.log(typeof req.body);
    console.log(req.body.toString());

    res.send(`This is home page with post request`);
});

app.listen(3000, function (req, res) {
    console.log(`listening on port 3000`);

});