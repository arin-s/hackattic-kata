var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let people = [];
let i = 0;

rl.on('line', function (line) {
    let person = { name: null, balance: null };
    let json = JSON.parse(line);
    person.name = Object.keys(json)[0];
    if (json.hasOwnProperty("extra"))
        person.balance = json.extra.balance;
    else
        person.balance = json[person.name].balance;
    people.push(person);
    //No way to know we've finished receiving lines other than by keeping count
    i++;
    if (i == 13)
        processOutput();
});

function processOutput() {
    people.sort((a, b) => {
        if (a.balance > b.balance)
            return 1;
        else
            return -1;
    });
    for (let person of people)
        console.log(person.name + ": " + person.balance.toLocaleString("en"));
}