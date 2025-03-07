// module scaffolding
const handler = {};



handler.contactHandler = function (requestProperties, callback) {
    // console.log(`aboutHandler`);
    callback(200, {
        message: 'This is contact handler'
    });
};



// module exports
module.exports = handler;