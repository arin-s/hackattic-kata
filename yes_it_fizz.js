var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    let ints = line.split(" ").sort();
    for (let i = ints[0]; i <= ints[1]; i++) {
        let str = "";
        if (i % 3 == 0)
            str += "Fizz";
        if (i % 5 == 0)
            str += "Buzz";
        if (str == "")
            str = i;
        console.log(str);
    }
})
