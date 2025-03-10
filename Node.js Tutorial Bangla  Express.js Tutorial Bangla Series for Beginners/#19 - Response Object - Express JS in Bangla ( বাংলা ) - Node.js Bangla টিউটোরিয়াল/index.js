const express = require('express');
const app = express();

app.set(`view engine`, `ejs`);

app.get(`/about`, function (req, res) {
    // res.send(`This is about page`);
    // console.log(res.headersSent); // false

    // res.render(`pages/about`, {
    //     name: `Bangladesh`
    // });
    // console.log(res.headersSent); // true


    // res.send(`About `);
    // res.end();

    // res.json({
    //     name: `Bangladesh`
    // });

    // res.status(200);
    // res.end();
    // res.sendStatus(405);

    // res.format({
    //     'text/plain': function () {
    //         res.send(`hi`);
    //     },
    //     'text/html': function () {
    //         res.render(`pages/about`, {
    //             name: `Bangladesh`
    //         });
    //     },
    //     'application/json': function () {
    //         res.json({
    //             message: `About`
    //         });
    //     },
    //     default: function () {
    //         res.status(406).send(`Not Acceptable`);
    //     }
    // });

    // res.cookie(`name`, `learnwithsumit`, {});
    // res.end();

    // res.location(`/test`);
    // res.redirect(`/test`);
    // res.end();

    res.set(`Platform`, `Learn With Sumit`);
    console.log(res.get(`Platform`));
    res.end();

});

app.get(`/test`, function (req, res) {
    res.send(`Hello World`);
});

app.listen(3000, function () {
    console.log(`express is running on port 3000...`);
});