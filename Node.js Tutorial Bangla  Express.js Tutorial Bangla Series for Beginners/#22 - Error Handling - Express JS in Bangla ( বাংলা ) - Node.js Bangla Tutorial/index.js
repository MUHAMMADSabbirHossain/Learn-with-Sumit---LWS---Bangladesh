// const express = require('express');
// const app = express();

// app.get(`/`, function (req, res, next) {
//     // res.send(`Hello World`);
//     // throw new Error(`There was an error`);
//     // res.send(a);

//     for (let i = 0; i <= 1000; i++) {
//         if (i === 5) {
//             next(`There was an error!`);
//         } else {
//             res.write(`a`);
//         }
//     }
//     res.end();
// });

// app.use(function (req, res, next) {
//     // res.status(404).send(`Requested url was not found!`);
//     next(`Requested url was not found!`);
// });

// app.use(function (error, req, res, next) {
//     // console.log(error);

//     if (res.headersSent) {
//         next(`There was a problem!`);
//     } else {
//         if (error.message) {
//             return res.status(500).send(error.message);
//         } else {
//             res.status(500).send(`There was an error`);
//         }
//     }
// });

// app.listen(3000, function (err) {
//     console.log(`app is listening on port 3000`);
// });




















const express = require(`express`);
const fs = require(`fs`);
const app = express();

app.get(`/`, [function (req, res, next) {
    // res.send(`Hello World`);
    // fs.readFileSync(`/file-does-not-exist`, function (error, data) {

    // });

    // fs.readFile(`/file-does-not-exist`, function (error, data) {
    //     if (error) {
    //         next(error);
    //     } else {
    //         res.send(data);
    //     }
    // });

    setTimeout(function () {
        try {
            console.log(a);
        } catch (error) {
            next(error);
        }
    }, 1000);
},
function (req, res, next) {
    console.log(data.property);
}
]);

app.use(function (req, res, next) {
    console.log(`I am not called`);
    next();
});

app.use(function (error, req, res, next) {
    console.log();
    if (res.headersSent) {
        next(`There was a problem!`);
    } else {
        if (error.message) {
            res.status(500).send(error.message);
        } else {
            res.send(`There was an error!`);
        }
    }
});

app.listen(3000, function (error) {
    console.log(`app is listening on port 3000`);
});