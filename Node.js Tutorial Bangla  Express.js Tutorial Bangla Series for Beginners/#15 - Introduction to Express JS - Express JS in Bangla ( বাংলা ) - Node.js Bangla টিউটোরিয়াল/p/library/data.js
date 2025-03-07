// dependencies
const path = require('path');
const fs = require('fs');
const { parseJSON } = require(`../helpers/utilities`);



// module scaffolding
const library = {};



// base directory of the data folder
library.baseDir = path.join(`${__dirname}/../.data`);



// write data to a file
library.create = function (dir, file, data, callback) {
    // console.log(dir, file, data, callback);

    // open a file for writing
    fs.open(`${library.baseDir}/${dir}/${file}.json`, `wx`, function (error, fileDescriptor) {
        if (!error && fileDescriptor) {
            fs.writeFile(fileDescriptor, JSON.stringify(data), function (error) {
                if (!error) {
                    fs.close(fileDescriptor, function (error) {
                        if (!error) {
                            callback(false, {
                                statusCode: 200,
                                message: `File ${file} created successfully.`
                            });
                        } else {
                            callback(error, {
                                statusCode: 500,
                                message: `Could not close file ${file}.`
                            });
                        }
                    });
                } else {
                    callback(error, {
                        statusCode: 500,
                        message: `Could not write to file ${file}.`
                    });
                }
            });
        } else {
            callback(error, {
                statusCode: 500,
                message: `Could not open file ${file}.`
            });
        }
    });
};


// read data from a file
library.read = function (dir, file, callback) {
    // console.log(dir, file, callback);

    fs.readFile(`${library.baseDir}/${dir}/${file}.json`, 'utf-8', function (error, data) {
        if (!error && data) {
            callback(false, JSON.parse(data));
        } else {
            callback(error, {
                statusCode: 500,
                message: `Could not read file ${file}.`
            });
        }
    });
};


// update data in a file
library.update = function (dir, file, data, callback) {
    // open the file for writing
    fs.open(`${library.baseDir}/${dir}/${file}.json`, `r+`, function (error, fileDescriptor) {
        if (!error && fileDescriptor) {
            // truncate the file
            fs.ftruncate(fileDescriptor, function (error) {
                if (!error) {
                    // write to the file and close it
                    fs.writeFile(fileDescriptor, JSON.stringify(data), function (error) {
                        if (!error) {
                            fs.close(fileDescriptor, function (error) {
                                if (!error) {
                                    callback(false, {
                                        statusCode: 200,
                                        message: `File ${file} updated successfully.`
                                    });
                                } else {
                                    callback(error, {
                                        statusCode: 500,
                                        message: `Could not close file ${file}.`
                                    });
                                }
                            });
                        } else {
                            callback(error, {
                                statusCode: 500,
                                message: `Could not write to file ${file}.`
                            });
                        }
                    })

                } else {
                    callback(error, {
                        statusCode: 500,
                        message: `Could not truncate file ${file}.`
                    });
                }
            });
        } else {
            callback(error, {
                statusCode: 500,
                message: `Could not open file ${file}.`
            });
        }

    })
};



// delete existing file
library.delete = function (dir, file, callback) {
    // console.log(dir, file, callback);

    // unlink the file
    fs.unlink(`${library.baseDir}/${dir}/${file}.json`, function (error) {
        if (!error) {
            callback(false, {
                statusCode: 200,
                message: `File ${file} deleted successfully.`
            });
        } else {
            callback(error, {
                statusCode: 500,
                message: `Could not delete file ${file}.`
            });
        }
    });
};


// list all the items in a directory
library.list = function (dir, callback) {
    fs.readdir(`${library.baseDir}/${dir}/`, function (error, fileNames) {
        // console.log(error, fileNames);

        if (!error && fileNames && fileNames.length > 0) {
            const trimmedFileNames = [];
            fileNames.forEach(function (fileName) {
                trimmedFileNames.push(fileName.replace(`.json`, ``));
            });

            callback(false, trimmedFileNames);
        } else {
            callback(error, {
                statusCode: 500,
                message: `Could not list the directory.`
            });
        }
    });
};



// module exports
module.exports = library;