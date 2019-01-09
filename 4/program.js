var fs = require('fs');

fs.readFile(process.argv[2], (err, data) => {
    if (! err) {
        var str = data.toString();
        let new_lines = str.split('\n');
        console.log(new_lines.length - 1);
    }
});