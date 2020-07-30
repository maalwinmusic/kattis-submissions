# What does the fox say?
Determined to discover the ancient mystery—the sound that the fox makes—you went into the forest, armed with a very good digital audio recorder. The forest is, however, full of animals’ voices, and on your recording, many different sounds can be heard. But you are well prepared for your task: you know exactly all the sounds which other animals make. Therefore the rest of the recording—all the unidentified noises—must have been made by the fox.
### Input
The first line of input contains the number of test cases T. The descriptions of the test cases follow:

The first line of each test case contains the recording—words over lower case English alphabet, separated by spaces. Each contains at most 100 letters and there are no more than 100 words. The next few lines are your pre-gathered information about other animals, in the format <animal> goes <sound>. There are no more than 100 animals, their names are not longer than 100 letters each and are actual names of animals in English. There is no fox goes ... among these lines.

The last line of the test case is exactly the question you are supposed to answer: what does the fox say?
### Output
For each test case, output one line containing the sounds made by the fox, in the order from the recording. You may assume that the fox was not silent (contrary to popular belief, foxes do not communicate by Morse code).

|#| Sample Input | Sample Output
| - | - | - | 
| 1 | 1, toot woof wa ow ow ow pa blub blub pa toot pa blub pa pa ow pow toot, dog goes woof, fish goes blub, elephant goes toot, seal goes ow, what does the fox say? | wa pa pa pa pa pa pow

## Submission
### Meta Data
|#| Language | Runtime | Date | ID
| - | - | - | - | - |
| 1 | JavaScript (Node.js) | 0.42 s | 2020-07-30 02:29:59 | 5900604

### Source Code
```javascript
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let testCaseCount;
let currentTestCase;

function TestCase() {
    this.addSound = (val) => {
        this._sounds.push(val.split(" ")[2]);
    }
    this.output = () => {
        console.log(this.recording.split(" ").filter(x => !this._sounds.includes(x)).join(" "));
    }
    this._sounds = [];
}

rl.on('line', (line) => {
    if (!isNaN(line)) {
        currentTestCase = new TestCase();
        testCaseCount = +line;
    } else {
        if (!currentTestCase.recording) {
            currentTestCase.recording = line;
        } else {
            if (line.includes('what does the fox say?')) {
                currentTestCase.output();
                if (--testCaseCount != 0) {
                    currentTestCase = new TestCase();
                }
            } else {
                currentTestCase.addSound(line);
            }
        }
    }
});
```