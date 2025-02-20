/*
 * Title: Sample Handlers
 * Description: Application Sample Handlers
 * Author: Muhammad Bin Ahmad
 * Date: 17/02/2025
 *
 */


// dependencies

// module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    // console.log(requestProperties);

    callback(200, {
        message: 'This is a sample text'
    });

};


// module exports
module.exports = handler;