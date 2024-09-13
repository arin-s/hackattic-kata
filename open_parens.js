
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    let count = 0;
    for (char of line.split("")) {
        if (char == "(")
            count++;
        if (char == ")")
            count--;
    }
    if (count != 0)
        console.log("no");
    else
        console.log("yes");
})
