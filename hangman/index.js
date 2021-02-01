const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const ram = {
    input: [],
    output: "",
    count: 0,
    maxCount: 10,
    alphabetLength: 26,
    winMessage: "WIN",
    loseMessage: "LOSE"
}

const input = [];

rl.on('line', (line) => {
    ram.input.push(line);
    if (ram.input.length == 2) {
        ram.input[0] = ram.input[0].split("");
        for (let i = 0; i < ram.alphabetLength; i++) {
            if (ram.input[0].includes(ram.input[1][i])) {
                ram.input[0] = ram.input[0].filter(item => item != ram.input[1][i]);
                if (ram.input[0].length == 0) {
                    ram.output = ram.winMessage;
                    break;
                }
            } else {
                ram.count++;
                if (ram.count == ram.maxCount) {
                    ram.output = ram.loseMessage;
                    break;
                }
            }
        }
        console.log(ram.output);
        //ram class reset();
    }
});