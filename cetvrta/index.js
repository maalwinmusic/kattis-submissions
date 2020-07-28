const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let x = [];
let y = [];

rl.on('line', (line) => {
    line = line.split(' ');
    x.push(line[0]);
    y.push(line[1]);
    if (x.length == 3) {
        console.log((x[0] === x[1] ? x[2] : x[0] === x[2] ? x[1] : x[0]), (y[0] === y[1] ? y[2] : y[0] === y[2] ? y[1] : y[0]));
    }
});