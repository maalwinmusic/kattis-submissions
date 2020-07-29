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
        let noSolution;
        loop1:
        for (let i = 0; i < m; i++) {
            noSolution = true;
            let str = [];
            loop2:
            for (let j = 0; j < 4; j++) {
                loop3:
                for (let k = 0; k < 4; k++) {
                    loop4:
                    for (let l = 0; l < 4; l++) {
                        str = `4 ${op[j]} 4 ${op[k]} 4 ${op[l]} 4`;
                        if (+eval(`${Math.abs(inputs[i]) == 4 ? str.replace("4 / 4 / 4 ", "Math.floor(4 / 4 / 4)") : str}`) == inputs[i]) {
                            output += "\r\n" + str + ` = ${inputs[i]}`;
                            noSolution = false;
                            break loop2;
                        }
                    }
                }
            }
            if (noSolution) {
                output += "\r\n" + "no solution";
            }
        }
        console.log(output);
    }
});