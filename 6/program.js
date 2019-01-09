const filtered_ls = require('./filtered_ls.js');

filtered_ls(process.argv[2], process.argv[3], (err, data) => {
    if (err) {
        console.log(err);
    }
    data.forEach(element => {
        console.log(element); 
    });
});