/*
 * Title: Not Found Handlers
 * Description: Application 404 Not Found Handlers
 * Author: Muhammad Bin Ahmad
 * Date: 17/02/2025
 *
 */


// dependencies

// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    console.log('404 Not Found');

    callback(404, {
        message: 'Your request resource was not found.'
    });
};


// module exports
module.exports = handler;