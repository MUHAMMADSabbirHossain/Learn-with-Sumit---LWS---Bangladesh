const express = require('express');
const app = express();
const multer = require('multer');
const path = require(`path`);
const port = 3000;

const storage = multer.diskStorage({
    destination: function (req, res, callback) {
        callback(null, `./uploads`);
    },
    filename: function (req, file, callback) {
        // console.log(file);

        const fileExtension = path.extname(file.originalname);

        callback(null, file.originalname.toLowerCase().replace(fileExtension, ``).replaceAll(` `, `-`) + `-` + Date.now() + fileExtension);
    }
});

const upload = multer({
    // dest: 'uploads/',
    limits: {
        fileSize: 1 * 8 * 1024 * 1024,
    },
    fileFilter: function (req, file, callback) {
        // console.log(`multer: `, file);

        if (file.fieldname === `avatar`) {
            if (file.mimetype === `image/png` || file.mimetype === `image/jpg` || file.mimetype === `image/jpeg`) {
                callback(null, true);
            } else {
                callback(new Error(`Only accpets .png ,.jpg and .jpeg file`));
            }
        } else if (file.fieldname === `multiAvatar`) {
            if (file.mimetype === `image/png` || file.mimetype === `image/jpg` || file.mimetype === `image/jpeg`) {
                callback(null, true);
            } else {
                callback(new Error(`Only accpets .png ,.jpg and .jpeg file`));
            }
        } else {
            callback(new Error(`Unknown files fields.`));
        }
    },
    storage
});

app.get(`/`, function (req, res) {
    res.send(`
    <form action="/" method="post" enctype="multipart/form-data">

    <input type="text" name="name" placeholder="name">

    <input type="file" name="avatar">

    <input type="file" name="multiAvatar" multiple>

    <input type="submit" value="submit">

    </form>
    `)
});

// app.post(`/`, upload.single(`avatar`), function (req, res) {
//     console.log(req.file, req.body);
//     res.send(`Success✅`);
// });

// app.post(`/`, upload.array(`multiAvatar`, 12), function (req, res) {
//     console.log(req.files, req.body);
//     res.send(`Success✅`);
// });

app.post(`/`, upload.fields([
    { name: `avatar`, maxCount: 1 },
    { name: `multiAvatar`, maxCount: 12 }
]), function (req, res) {
    // console.log(req.files, req.body);
    res.send(`Success✅`);
});

app.use(function (error, req, res, next) {
    // console.log(error);

    if (error) {
        if (error instanceof multer.MulterError) {
            res.status(400).send(`Multer error: ${error.message}`);
        } else {
            res.status(400).send(`Custom error: ${error.message}`);
        }
    } else {
        res.status(200).send(`Successfully submited✅`)
    }
});

app.listen(port, function () {
    console.log(`server is running on port ${port}`);
});