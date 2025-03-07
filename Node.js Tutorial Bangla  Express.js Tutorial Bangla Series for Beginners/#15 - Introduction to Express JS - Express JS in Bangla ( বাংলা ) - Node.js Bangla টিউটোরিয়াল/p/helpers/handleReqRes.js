/* 
 *Title: Handle Request and Response
 *Description: Handle Request and Response
 *Author: Firstname Lastname
 *Date: 19/02/2025  
 *
 */



// dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
const routes = require(`../routes`);
const { notFoundHandler } = require(`../handlers/routeHandlers/notFoundHandler`);
const { parseJSON } = require(`../helpers/utilities`);



// module scaffolding
const handler = {};



// functions definition
handler.handleReqRes = function (req, res) {
    // request handle
    // // console.log(url.parse(req.url, true));
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, ``);
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;
    let realData = ``;

    const decoder = new StringDecoder('utf-8');

    const requestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObject,
    };


    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;


    req.on(`data`, function (buffer) {
        realData += decoder.write(buffer);
    });
    req.on(`end`, function () {
        realData += decoder.end();
        // console.log(realData); // stringigy

        requestProperties.body = parseJSON(realData);
        // console.log(requestProperties);


        chosenHandler(requestProperties, function (statusCode, payload) {
            statusCode = typeof (statusCode) === 'number' ? statusCode : 500;
            payload = typeof (payload) === 'object' ? payload : {};
            const payloadString = JSON.stringify(payload);

            // retrun final response handle
            res.setHeader(`Content-Type`, `application/json`);
            res.writeHead(statusCode);
            res.end(payloadString);
        });
    });
};


// module exports
module.exports = handler;