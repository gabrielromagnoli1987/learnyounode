// My solution didn't work

/* const http = require('http');
const bl = require('bl'); // BufferList for collecting stream data

let datas = [];
for(let i = 2; i < process.argv; i++) {
    url = process.argv[i];
    http.get(url, (response) => {
        response.setEncoding('utf8');
        response.pipe(bl((err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            data = data.toString();
            datas.push(data);
        }));
    });
}

setTimeout(() => {
    datas.forEach(data => {
        console.log(data);
    });
}, 10000) */

// https://stackoverflow.com/questions/34352459/how-to-count-callbacks

const http = require('http')
const bl = require('bl')
const results = []
let count = 0

function printResults() {
    for (let i = 0; i < 3; i++) {
        console.log(results[i])
    }
}

function httpGet(index) {
    http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err)
            }

            results[index] = data.toString()
            count++

            if (count === 3) {
                printResults()
            }
        }))
    })
}

for (let i = 0; i < 3; i++) {
    httpGet(i)
}