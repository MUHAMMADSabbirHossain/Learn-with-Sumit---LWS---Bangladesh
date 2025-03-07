// dependencies



// module scaffolding
const handler = {};



handler.sampleHandler = function (requestProperties, callback) {
    // console.log(`Sample`);
    // console.log(requestProperties);

    callback(200, {
        message: 'This is a sample url'
    });
};



// module exports
module.exports = handler;