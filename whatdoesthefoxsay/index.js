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