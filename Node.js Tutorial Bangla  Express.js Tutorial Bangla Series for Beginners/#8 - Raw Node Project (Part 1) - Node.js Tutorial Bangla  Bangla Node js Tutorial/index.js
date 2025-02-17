/* 
 * Title: Uptime Monitoring Application
 * Description: A RESTful API to monitor up or down time of user defined links
 * Author: Muhammad Bin Ahmad
 * Date: 17/02/2025
 * 
 */

// depndencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes')

// app object - module scaffolding
const app = {};

// configuration
app.config = {
    port: 3000
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listening to port ${app.config.port}`);
    });
};

// handle rquests and responses
app.handleReqRes = handleReqRes;

// start the server
app.createServer();