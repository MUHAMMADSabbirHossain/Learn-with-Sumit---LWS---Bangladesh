const express = require(`express`);
const app = express();


app.get(`/`, function (req, res) {
    res.send(`testing...`);
});


app.post(`/`, function () {
    res.send(`This is home page with post request.`);
});


app.listen(3000, function () {
    console.log(`express is running...`);

});