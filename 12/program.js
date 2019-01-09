const map = require('through2-map');
const http = require('http');
const server = http.createServer((request, response) => {
    if (request.method !== 'POST') {
        return response.end('send me a POST\n');
    }
    request.pipe(map((chunk) => {  
        return chunk.toString().toUpperCase();  
    })).pipe(response);
});
port = process.argv[2];
server.listen(port);