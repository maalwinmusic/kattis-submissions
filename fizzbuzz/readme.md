# FizzBuzz
According to Wikipedia, FizzBuzz is a group word game for children to teach them about division. This may or may not be true, but this question is generally used to torture screen young computer science graduates during programming interviews.

Basically, this is how it works: you print the integers from 1 to N, replacing any of them divisible by X with Fizz or, if they are divisible by Y, with Buzz. If the number is divisible by both X and Y, you print FizzBuzz instead.

Check the samples for further clarification.
### Input
Input contains a single test case. Each test case contains three integers on a single line, X, Y and N (1≤X<Y≤N≤100).
### Output
Print integers from 1 to N in order, each on its own line, replacing the ones divisible by X with Fizz, the ones divisible by Y with Buzz and ones divisible by both X and Y with FizzBuzz.

|#| Sample Input | Sample Output
| - | - | - | 
| 1 | 2, 3, 7 | 1, Fizz, Buzz, Fizz, 5, FizzBuzz, 7
| 2 | 2, 4, 7 | 1, Fizz, 3, FizzBuzz, 5, Fizz, 7
| 3 | 3, 5, 7 | 1, 2, Fizz, 4, Buzz, Fizz, 7

## Submission
### Meta Data
|#| Language | Runtime | Date | ID
| - | - | - | - | - |
| 1 | JavaScript (Node.js) | 0.42 s | 2020-07-28 16:23:04 | 5896670

### Source Code
```javascript
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
```
