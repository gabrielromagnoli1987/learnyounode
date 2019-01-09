const fs = require('fs');
const path = require('path');

function filtered_ls(folder, ext, callback) {

    const extension = '.' + ext;
    let ls_filtered = [];

    fs.readdir(folder, (err, list) => {
        if (err) {
            return callback(err);
        }
        list.forEach(element => {
            if (path.extname(element) === extension) {
                ls_filtered.push(element);
            }
        });
        callback(null, ls_filtered);
    });
}

module.exports = filtered_ls;