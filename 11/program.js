const http = require('http');
const fs = require('fs');
const filePath = process.argv[3];
const server = http.createServer((request, response) => {
    stream = fs.createReadStream(filePath);
    stream.pipe(response);
});
port = process.argv[2];
server.listen(port);