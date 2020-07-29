const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let m;
let inputs = [];
let op = ["*", "/", "+", "-"];

rl.on('line', (line) => {
    m ? inputs.push(+line) : m = +line;
    if (inputs.length == m) {
        let output = "";
        for (let i = 0; i < m; i++) {
            output += "\r\n" + getSolution(inputs[i]);
        }
        console.log(output);
    }
});

function getSolution(n) {
    let str = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            for (let k = 0; k < 4; k++) {
                str = `4 ${op[i]} 4 ${op[j]} 4 ${op[k]} 4`;
                if (+eval(`${Math.abs(n) == 4 ? str.replace("4 / 4 / 4 ", "Math.floor(4 / 4 / 4)") : str}`) == n) {
                    return str + ` = ${n}`;
                }
            }
        }
    }
    return "no solution";
}