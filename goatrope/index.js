const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// x, y, x1, y1, x2, and y2
//7 3 0 0 5 4 // 0 4 5 0
const ram = {
    fencePost: ram.node(0, 0),
    house: [],
    output: "ERROR",
    GetDistance: function (a, b) {
        return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
    },
    node: function (x, y) {
        return {
            x,
            y
        }
    }
}
rl.on('line', (line) => {
    line = line.split(" ");
    ram.fencePost = ram.node(parseInt(line[0]), parseInt(line[1]));
    ram.house.push(ram.node(parseInt(line[2]), parseInt(line[3])), ram.node(parseInt(line[4]), parseInt(line[5])));

    if (ram.fencePost.y >= ram.house[0].y && ram.fencePost.y <= ram.house[1].y) {
        if (ram.fencePost.x <= ram.house[0].x) {
            //left side of the house
            ram.output = ram.house[0].x - ram.fencePost.x;
        } else {
            //right side of the house
            ram.output = ram.fencePost.x - ram.house[1].x;
        }
    } else if (ram.fencePost.x >= ram.house[0].x && ram.fencePost.x <= ram.house[1].x) {
        if (ram.fencePost.y <= ram.house[0].y) {
            //bottom side of the house
            ram.output = ram.house[0].y - ram.fencePost.y;
        } else {
            //top side of the house
            ram.output = ram.fencePost.y - ram.house[1].y;
        }
    } else {
        ram.house.push(ram.node(parseInt(line[2]), parseInt(line[5])), ram.node(parseInt(line[4]), parseInt(line[3])));
        ram.output = ram.house.map(item => ram.GetDistance(ram.fencePost, item)).sort((a, b) => a - b)[0];
    }

    console.log(ram.output);
});