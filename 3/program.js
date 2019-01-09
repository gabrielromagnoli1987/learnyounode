var fs = require('fs');

buffer = fs.readFileSync(process.argv[2]);

var str = buffer.toString();

let new_lines = str.split('\n');

console.log(new_lines.length - 1);