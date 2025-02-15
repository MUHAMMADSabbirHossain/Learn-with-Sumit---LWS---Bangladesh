const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.write('Hello programmers!');
        res.write('How are you doing?');
        res.end();
    } else if (req.url === '/about') {
        res.write('This is about us page');
        res.end();
    } else {
        res.writeHead(404);
        res.write('Page not found!');
        res.end();
    }
});

// server.on('connection', (soket) => {
//     console.log('New connection...');
// })

server.listen(3000);

console.log('listening on port 3000');


