const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    let length = line.length / 3;
    console.log(line.substr(0, length) === line.substr(length, length) ? line.substr(0, length) : line.substr(length * 2, length));
});