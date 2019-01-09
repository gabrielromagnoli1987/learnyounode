const numbers = process.argv.slice(2, process.argv.length + 1);
let sum = numbers.reduce((a, b) => parseInt(a) + parseInt(b), 0);
console.log(sum);