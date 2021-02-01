const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const ram = {
    inputs: [],
    patternLength: 0,
    output: "",
}

rl.on('line', (line) => {
    if (line != "END") {
        ram.inputs.push(line);
    } else {
        for (let i = 0; i < ram.inputs.length; i++) {
            ram.inputs[i] = ram.inputs[i].substr(1, ram.inputs[i].length - 2).split("*");
            ram.output = "EVEN";
            ram.patternLength = ram.inputs[i][0].length;
            for (let j = 1; j < ram.inputs[i].length; j++) {
                if (ram.inputs[i][j].length != ram.patternLength) {
                    ram.output = "NOT " + ram.output;
                    break;
                }
            }
            console.log(`${i + 1} ${ram.output}`);
        }
    }
});