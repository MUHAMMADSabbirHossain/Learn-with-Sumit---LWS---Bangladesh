const fs = require('fs');

async function unliker(file_path, callback) {
    // console.log(file_path);
    return fs.unlink(`__dirname/../public/uploads/attachments/${file_path}`, callback);
};

module.exports = unliker;