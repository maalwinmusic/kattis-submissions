const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    line = line.split(' ');
    for (let i = 1; i <= line[2]; i++) {
        let output = "";
        if (!(i % line[0])) {
            output += "Fizz";
        }
        if (!(i % line[1])) {
            output += "Buzz";
        }
        console.log(output || i);
    }
});