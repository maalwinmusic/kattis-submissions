const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', (line) => {
    let arr = line.split("");
    let cards = [0, 0, 0];
    for (let i = 0, j = arr.length; i < j; i++) {
        switch (arr[i]) {
            case "T":
                cards[0]++;
                break;
            case "C":
                cards[1]++;
                break;
            case "G":
                cards[2]++;
                break;
        }
    }
    console.log(Math.pow(cards[0], 2) + Math.pow(cards[1], 2) + Math.pow(cards[2], 2) + cards.sort((a, b) => { return a - b; })[0] * 7);
});