const express = require('express');
const app = express();
const adminRouter = require(`./adminRouter`);
const publicRouter = require(`./publicRouter`);

// app.get(`/`, function (req, res) {
//     res.send(`Home`);
// });

// app.get(`/about`, function (req, res) {
//     res.send(`About`);
// });

app.use(`/admin`, adminRouter);
app.use(`/`, publicRouter);

app.listen(3000, function () {
    console.log(`express is running on port 3000...`);
});