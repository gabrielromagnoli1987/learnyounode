const http = require('http');

const server = http.createServer((request, response) => {
    if (request.method !== 'GET') {
        return response.end('send me a GET\n');
    }
    response.writeHead(200, { 'Content-Type': 'application/json' });
    const myURL = new URL(request.url, 'http://localhost');
    if (myURL.pathname === '/api/parsetime') {
        const iso = myURL.searchParams.get('iso');
        const date = new Date(iso);
        const dateObj = { 'hour': date.getHours(), 'minute': date.getMinutes(), 'second':date.getSeconds() };
        response.write(JSON.stringify(dateObj));
        response.end();
    } else if (myURL.pathname === '/api/unixtime') {
        const iso = myURL.searchParams.get('iso');
        const dateObj = { 'unixtime': new Date(iso).getTime() }
        const json = JSON.stringify(dateObj);
        response.write(json);
        response.end();
    } else {
        res.writeHead(404);
        res.end();
    }
});
port = process.argv[2];
server.listen(port);