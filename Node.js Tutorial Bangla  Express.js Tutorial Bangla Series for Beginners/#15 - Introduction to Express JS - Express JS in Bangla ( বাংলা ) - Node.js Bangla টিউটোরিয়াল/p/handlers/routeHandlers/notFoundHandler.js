// module scaffolding
const handler = {};



handler.notFoundHandler = function (requestProperties, callback) {
    // console.log(`notFoundHandler`);
    callback(404, {
        message: 'Your request resource was not found.'
    });

};



// module exports
module.exports = handler;