const fs = require('fs');
const path = require('path');

const extension = '.' + process.argv[3];
let ls_filtered = [];

fs.readdir(process.argv[2], (err, list) => {
    if (err) {
        return console.error(err);
    }
    list.forEach(element => {
        if (path.extname(element) === extension) {
            ls_filtered.push(element);
            console.log(element);
        }
    });
});

