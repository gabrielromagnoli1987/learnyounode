const http = require('http');
const bl = require('bl'); // BufferList for collecting stream data

http.get(process.argv[2], (response) => {
    response.setEncoding('utf8');
    response.pipe(bl((err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));
});
