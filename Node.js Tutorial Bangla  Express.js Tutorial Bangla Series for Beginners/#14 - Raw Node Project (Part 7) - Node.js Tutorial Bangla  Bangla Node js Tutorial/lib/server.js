/* 
 * Title: Server library
 * Description: Server related all the files
 * Author: Muhammad Bin Ahmad
 * Date: 22/02/2025
 * 
 */

// depndencies
const http = require('http');
const { handleReqRes } = require('../helpers/handleReqRes');
const environment = require('../helpers/environments');

// server object - module scaffolding
const server = {};


// create server
server.createServer = () => {
    const createServerVariable = http.createServer(server.handleReqRes);
    createServerVariable.listen(environment.port, () => {
        // console.log(`environment variable is ${process.env.NODE_ENV}`);

        console.log(`listening to port ${environment.port}`);
    });
};


// handle rquests and responses
server.handleReqRes = handleReqRes;

// start the server
server.init = () => {
    server.createServer();
};

// export the module
module.exports = server;