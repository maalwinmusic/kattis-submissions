# Cetvrta
Mirko needs to choose four points in the plane so that they form a rectangle with sides parallel to the axes. He has already chosen three points and is confident that he hasn’t made a mistake, but is having trouble locating the last point. Help him.
### Input
Each of the three points already chosen will be given on a separate line. All coordinates will be integers between 1 and 1000.
### Output
Output the coordinates of the fourth vertex of the rectangle.
|#| Sample Input | Sample Output
| - | - | - | 
| 1 | 5 5, 5 7, 7 5 | 7 7
| 2 | 30 20, 10 10, 10 20 | 30 10
## Submission
### Meta Data
|#| Language | Runtime | Date | ID
| - | - | - | - | - |
| 1 | JavaScript (Node.js) | 0.42 s | 2020-07-28 	16:04:57 | 5896619

### Source Code
```javascript
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
```
