const express = require('express');
const app = express();
const multer = require('multer');
const path = require(`path`);

// File upload folder
const UPLOAD_FOLDER = './uploads';

// define the storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, UPLOAD_FOLDER);
    },
    filename: function (req, file, cb) {
        // Important file.pdf => important-file-0000000000.pdf
        const fileExt = path.extname(file.originalname);
        const fileName = file.originalname.replace(fileExt, ``).toLowerCase().split(` `).join(`-`) + Date.now();

        cb(null, fileName + fileExt);
    }
});

// preapre the final multer upload object 
const upload = multer({
    // dest: UPLOAD_FOLDER,
    storage: storage,
    limits: {
        fileSize: 1000000, // 1MB

    },
    fileFilter: function (req, file, cb) {
        if (file.fieldname === `avatar`) {
            if (file.mimetype === `image/png` || file.mimetype === `image/jpg` || file.mimetype === `image/jpeg`
            ) {
                // console.log(`filename correct.`);

                cb(null, true);
            } else {
                // console.log(`filename incorrect.`);

                // cb(null, false); // silently

                cb(new Error(`Only .jpg, .png or .jpeg format allowed!`));
            }
        } else if (file.fieldname === `doc`) {
            if (file.mimetype === `application/pdf`) {
                cb(null, true);
            } else {
                cb(new Error(`Only .pdf format allowed!`));
            }
        } else {
            cb(new Error(`There was an unknown error!`));
        }

        // console.log(file);
    },
});

app.get(`/`, function (req, res) {
    res.send(`
    <form action="/" method="post" enctype="multipart/form-data">
        <!-- <input type='file' name='avatar'/>
        
        <input type='file' name='gallery' multiple/>

        <input type='name' name='name'/> -->

        <input type='file' name='avatar'/>

        <input type='file' name='doc'/>

        <input type='submit' value='Submit'/>    
    <form/>
    `);
});

// app.post(`/`, upload.fields([
//     { name: 'avatar', maxCount: 1 },
//     { name: 'gallery', maxCount: 2 }
// ]), function (req, res) {
//     res.send(`File uploaded successfully.`);
// });

// app.post(`/`, upload.single(`avatar`), function (req, res) {
//     res.send(`File uploaded successfully.`);
// });

app.post(`/`, upload.fields([
    { name: 'avatar', maxCount: 1 },
    { name: 'doc', maxCount: 1 }
]), function (req, res) {
    console.log(req.files);
    res.send(`File uploaded successfully.`);
});

// default error handler
app.use(function (error, req, res, next) {
    if (error) {
        if (error instanceof multer.MulterError) {
            // console.log('There is an error.');

            res.status(500).send(`There was an upload error!`);
        } else {
            // console.log('multer error', error.message);

            res.status(500).send(error.message);
        }
    } else {
        res.send(`success`);
    }
})

app.listen(3000, function () { console.log('Server is running on port 3000') });