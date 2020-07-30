# Seven Wonders
Seven Wonders is a card drafting game in which players build structures to earn points. The player who ends with the most points wins. One winning strategy is to focus on building scientific structures. There are three types of scientific structure cards: Tablet (‘T’), Compass (‘C’), and Gear (‘G’). For each type of cards, a player earns a number of points that is equal to the squared number of that type of cards played. Additionally, for each set of three different scientific cards, a player scores 7 points.
For example, if a player plays 3 Tablet cards, 2 Compass cards and 1 Gear card, she gets 32+22+12+7=21 points.

It might be tedious to calculate how many scientific points a player gets by the end of each game. Therefore, you are here to help write a program for the calculation to save everyone’s time.
### Input
The input has a single string with no more than 50 characters. The string contains only letters ‘T’, ‘C’ or ‘G’, which denote the scientific cards a player has played in a Seven Wonders game.
### Output
Output the number of scientific points the player earns.

|#| Sample Input | Sample Output
| - | - | - | 
| 1 | TCGTTC | 21
| 2 | CCC | 9
| 3 | TTCCGG | 26

## Submission
### Meta Data
|#| Language | Runtime | Date | ID
| - | - | - | - | - |
| 1 | JavaScript (Node.js) | 0.42 s | 2020-07-30 02:51:34 | 5900620

### Source Code
```javascript
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
```
