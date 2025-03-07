// module scaffolding
const handler = {};



handler.aboutHandler = function (requestProperties, callback) {
    // console.log(`aboutHandler`);
    callback(200, {
        message: 'This is about handler'
    });
};



// module exports
module.exports = handler;