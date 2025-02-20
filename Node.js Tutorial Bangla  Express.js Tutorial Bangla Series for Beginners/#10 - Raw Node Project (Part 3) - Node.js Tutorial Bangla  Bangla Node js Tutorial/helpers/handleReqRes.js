/* 
 * Title: Handle Request and Response
 * Description:Handle Request and Response
 * Author: Muhammad Bin Ahmad
 * Date: 17/02/2025
 * 
 */

// dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
const routes = require('../routes');
const { notFoundHandler } = require('../handlers/routeHandlers/notFoundHandler');
const { parseJSON } = require('../helpers/utilities');


// module scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
    // request handle
    // get the url and parse it
    const parsedUrl = url.parse(req.url, true);
    // console.log(parsedUrl);
    /* Url {
         protocol: null,
         slashes: null,
         auth: null,
         host: null,
         port: null,
         hostname: null,
         hash: null,
         search: null,
         query: [Object: null prototype] {},
         pathname: '/',
         path: '/',
         href: '/'
        } */

    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    // console.log(trimmedPath);
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    // console.log(queryStringObject);
    const headersObject = req.headers;
    // console.log(headersObject);

    const requestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObject,
    };

    const decoder = new StringDecoder('utf-8');
    let realData = '';

    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;

    /* chosenHandler(requestProperties, (statusCode, payload) => {
        statusCode = typeof statusCode === 'number' ? statusCode : 500;
        payload = typeof (payload) === 'object' ? payload : {};

        const payloadString = JSON.stringify(payload);

        // return the final response
        res.writeHead(statusCode);
        res.end(payloadString);
    }); */

    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end();
        // console.log(realData);

        requestProperties.body = parseJSON(realData);

        chosenHandler(requestProperties, (statusCode, payload) => {
            statusCode = typeof statusCode === 'number' ? statusCode : 500;
            payload = typeof (payload) === 'object' ? payload : {};

            const payloadString = JSON.stringify(payload);

            // return the final response
            res.setHeader('Content-Type', 'application/json');
            res.writeHead(statusCode);
            res.end(payloadString);
        });

        // response handle
        // res.end(`Hello World!`);
    });
};

module.exports = handler;