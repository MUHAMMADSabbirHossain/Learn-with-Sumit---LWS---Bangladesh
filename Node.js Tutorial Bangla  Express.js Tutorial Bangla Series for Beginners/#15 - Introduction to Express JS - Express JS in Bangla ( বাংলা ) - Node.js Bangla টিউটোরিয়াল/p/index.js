/*
 * Title: Uptime Monitoring Application
 * Description: A RESTful API to monitor up or down time of user defined links
 * Author: Muhammad Bin Ahmad
 * Date: 17/02/2025
 *
 */



// depndencies
// const http = require('http');
// const { handleReqRes } = require(`./helpers/handleReqRes`);
// const environment = require(`./helpers/environment`);
// const data = require(`./library/data`);
// const { sendTwilioSms } = require(`./helpers/notifications`);
const server = require(`./library/server`);
const workers = require(`./library/worker`);

// // @TODO: pore moche dibo
// // data.create(`test`, 'newFile', { name: 'Bangladesh', language: 'Bangla' }, function (error, data) {
// //     console.log(error, data);
// // });

// // data.read(`test`, `newFile`, function (error, data) {
// //     console.log(error, data);
// // });

// // data.update(`test`, `newFile`, { name: 'England', language: 'English' }, function (error, data) {
// //     console.log(error, data);
// // });

// // data.delete(`test`, `newFile`, function (error, data) {
// //     console.log(error, data);
// // });

// // sendTwilioSms(`01518790300`, `Hello World!`, function (error, data) {
// //     console.log(`This is the error`, error, data);
// // });



// app object - module scaffolding
const app = {};



// // configuration
// app.config = {
//     port: environment.config.port
// };



// // functions definition
// app.createServer = function () {
//     http.createServer(app.handleReqRes).listen(app.config.port, function () {
//         console.log(`listening to port: ${app.config.port}.`);
//     });
// };


// // handle request and response
// app.handleReqRes = handleReqRes;



// functions call and invokation
// app.createServer();



app.init = function () {
    // server initialization
    server.init();

    // worker initialization
    workers.init();
};



app.init();



// module exports
module.exports = app;