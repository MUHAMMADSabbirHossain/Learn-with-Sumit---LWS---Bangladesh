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
const environment = require('./helpers/environments');
// const data = require('./lib/data');
// console.log(environment);
const { sendTwilioSms } = require('./helpers/notifications');
// @TODO: remove later
sendTwilioSms('01518790300', 'Hello World', (err) => {
    console.log('This is the error', err);
});

// app object - module scaffolding
const app = {};

// testing file system
// @TODO: pore moche dibo
/* data.create('test', 'newFile', { 'name': 'Bangladesh', 'language': 'Bangla' }, (err) => {
    console.log(`error was`, err);
}); */

/* data.read('test', 'newFile', (err, data) => {
    console.log(err, data);
}); */

/* data.update('test', 'newFile', { 'name': 'England', 'language': 'English' }, (err) => {
    console.log(err);
}); */

/* data.delete('test', 'newFile', (err) => {
    console.log(err);
}); */

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        // console.log(`environment variable is ${process.env.NODE_ENV}`);

        console.log(`listening to port ${environment.port}`);
    });
};

// handle rquests and responses
app.handleReqRes = handleReqRes;

// start the server
app.createServer();