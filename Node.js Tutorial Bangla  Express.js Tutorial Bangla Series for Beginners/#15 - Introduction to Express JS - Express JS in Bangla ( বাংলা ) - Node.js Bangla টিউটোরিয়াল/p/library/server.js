// dependencies
const http = require('http');
const { handleReqRes } = require(`../helpers/handleReqRes`);
const environment = require(`../helpers/environment`);



// module scaffolding
const server = {};



// configuration
server.config = {
    port: environment.config.port
};



// functions definition
server.createServer = function () {
    http.createServer(server.handleReqRes).listen(server.config.port, function () {
        console.log(`listening to port: ${server.config.port}.`);
    });
};


// handle request and response
server.handleReqRes = handleReqRes;



server.init = function () {
    server.createServer();
};



// module exports
module.exports = server;