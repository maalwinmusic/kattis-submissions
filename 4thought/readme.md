# 4 thought
Write a program which, given an integer n as input, will produce a mathematical expression whose solution is n. The solution is restricted to using exactly four 4’s and exactly three of the binary operations selected from the set {∗,+,−,/}. The number 4 is the ONLY number you can use. You are not allowed to concatenate fours to generate other numbers, such as 44 or 444.

For example given n=0, a solution is 4∗4−4∗4=0. Given n=7, a solution is 4+4−4 / 4=7. Division is considered truncating integer division, so that 1/4 is 0 (instead of 0.25). Assume the usual precedence of operations so that 4+4∗4=20, not 32. Not all integer inputs have solutions using four 4’s with the aforementioned restrictions (consider n=11).

Hint: Using your forehead and some forethought should make an answer forthcoming. When in doubt use the fourth.
### Input
Input begins with an integer 1≤m≤1000, indicating the number of test cases that follow. Each of the next m lines contain exactly one integer value for n in the range −1000000≤n≤1000000.
### Output
For each test case print one line of output containing either an equation using four 4’s to reach the target number or the phrase no solution. Print the equation following the format of the sample output; use spaces to separate the numbers and symbols printed. If there is more than one such equation which evaluates to the target integer, print any one of them.
|#| Sample Input | Sample Output
| - | - | - | 
| 1 | 5, 9, 0, 7, 11, 24 | 4 + 4 + 4 / 4 = 9, 4 * 4 - 4 * 4 = 0, 4 + 4 - 4 / 4 = 7, no solution, 4 * 4 + 4 + 4 = 24
## Submission
### Meta Data
|#| Language | Runtime | Date | ID
| - | - | - | - | - |
| 1 | JavaScript (Node.js) | 0.43 s | 2020-07-29 	03:52:30 | 5897831

### Source Code
```javascript
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
```