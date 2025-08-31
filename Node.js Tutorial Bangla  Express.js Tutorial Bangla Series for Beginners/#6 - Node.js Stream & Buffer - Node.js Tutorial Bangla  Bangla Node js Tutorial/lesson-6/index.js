const fs = require('fs');

// // fs.readFile(`bigdata.txt`, (err, data) => {
// //     if (err) {
// //         console.log(err);
// //     }
// //     console.log(data.toString());
// // });


// const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);

// ourReadStream.on('data', (chunk) => {
//     console.log(chunk);
//     // console.log(chunk.toString());
// })
// console.log('hello');







const http = require('http');
/* console.log(http);
{
    _connectionListener: [Function: connectionListener],
    METHODS: [
      'ACL',         'BIND',       'CHECKOUT',
      'CONNECT',     'COPY',       'DELETE',
      'GET',         'HEAD',       'LINK',
      'LOCK',        'M-SEARCH',   'MERGE',
      'MKACTIVITY',  'MKCALENDAR', 'MKCOL',
      'MOVE',        'NOTIFY',     'OPTIONS',
      'PATCH',       'POST',       'PROPFIND',
      'PROPPATCH',   'PURGE',      'PUT',
      'REBIND',      'REPORT',     'SEARCH',
      'SOURCE',      'SUBSCRIBE',  'TRACE',
      'UNBIND',      'UNLINK',     'UNLOCK',
      'UNSUBSCRIBE'
    ],
    STATUS_CODES: {
      '100': 'Continue',
      '101': 'Switching Protocols',
      '102': 'Processing',
      '103': 'Early Hints',
      '200': 'OK',
      '201': 'Created',
      '202': 'Accepted',
      '203': 'Non-Authoritative Information',
      '204': 'No Content',
      '205': 'Reset Content',
      '206': 'Partial Content',
      '207': 'Multi-Status',
      '208': 'Already Reported',
      '226': 'IM Used',
      '300': 'Multiple Choices',
      '301': 'Moved Permanently',
      '302': 'Found',
      '303': 'See Other',
      '304': 'Not Modified',
      '305': 'Use Proxy',
      '307': 'Temporary Redirect',
      '308': 'Permanent Redirect',
      '400': 'Bad Request',
      '401': 'Unauthorized',
      '402': 'Payment Required',
      '403': 'Forbidden',
      '404': 'Not Found',
      '405': 'Method Not Allowed',
      '406': 'Not Acceptable',
      '407': 'Proxy Authentication Required',
      '408': 'Request Timeout',
      '409': 'Conflict',
      '410': 'Gone',
      '411': 'Length Required',
      '412': 'Precondition Failed',
      '413': 'Payload Too Large',
      '414': 'URI Too Long',
      '415': 'Unsupported Media Type',
      '416': 'Range Not Satisfiable',
      '417': 'Expectation Failed',
      '418': "I'm a Teapot",
      '421': 'Misdirected Request',
      '422': 'Unprocessable Entity',
      '423': 'Locked',
      '424': 'Failed Dependency',
      '425': 'Too Early',
      '426': 'Upgrade Required',
      '428': 'Precondition Required',
      '429': 'Too Many Requests',
      '431': 'Request Header Fields Too Large',
      '451': 'Unavailable For Legal Reasons',
      '500': 'Internal Server Error',
      '501': 'Not Implemented',
      '502': 'Bad Gateway',
      '503': 'Service Unavailable',
      '504': 'Gateway Timeout',
      '505': 'HTTP Version Not Supported',
      '506': 'Variant Also Negotiates',
      '507': 'Insufficient Storage',
      '508': 'Loop Detected',
      '509': 'Bandwidth Limit Exceeded',
      '510': 'Not Extended',
      '511': 'Network Authentication Required'
    },
    Agent: [Function: Agent] { defaultMaxSockets: Infinity },
    ClientRequest: [Function: ClientRequest],
    IncomingMessage: [Function: IncomingMessage],
    OutgoingMessage: [Function: OutgoingMessage],
    Server: [Function: Server],
    ServerResponse: [Function: ServerResponse],
    createServer: [Function: createServer],
    validateHeaderName: [Function: __node_internal_],
    validateHeaderValue: [Function: __node_internal_],
    get: [Function: get],
    request: [Function: request],
    setMaxIdleHTTPParsers: [Function: setMaxIdleHTTPParsers],
    maxHeaderSize: [Getter],
    globalAgent: [Getter/Setter]
  } */

// const server = http.createServer((req, res) => {
//     // console.log('request');

//     if (req.url === '/') {
//         res.write('<html><head><title>Home page</title></head><body><h1>Home page</h1><form action="/process" method="POST"><textarea name="message" rows="10" cols="20"></textarea name="message"><button type="submit">Send</button></form></body></html>');
//         res.end();
//     } else if (req.url === '/process' && req.method === 'POST') {
//         // console.log(req.data);

//         const body = [];

//         req.on('data', (chunk) => {
//             // console.log(chunk);
//             // console.log(chunk.toString());
//             body.push(chunk);
//         })

//         req.on('end', () => {
//             console.log('stream finished.');
//             const parseBody = Buffer.concat(body).toString();
//             console.log(parseBody);

//             res.write('This is process page, Thank you for submit message');
//             res.end();
//         })

//     } else if (req.url === '/about') {
//         res.write('This is about page');
//         res.end();
//     } else {
//         res.write('404 not found');
//         res.end();
//     }
// })

// // server.on('connection', (req, res) => {
// //     console.log('request');
// // })
// server.listen(3000);
















const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);

// ourReadStream.on('data', (chunk) => {
//     ourWriteStream.write(chunk);
// });

ourReadStream.pipe(ourWriteStream);
















const server = http.createServer((req, res) => {
  const myReadStream = fs.createReadStream(__dirname + '/bigdata.txt', 'utf-8');
  myReadStream.pipe(res);
});
server.listen(3000);

console.log('listening on port 3000');


