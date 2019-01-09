const strftime = require('strftime');
const net = require('net'); // for tcp connections

const server = net.createServer((socket) => {
    // format: "2019-01-09 12:10"
    date = strftime('%F %H:%M', new Date());
    
    // sends the date and closes the socket
    socket.end(date + '\n');
});
port = process.argv[2];
server.listen(port);