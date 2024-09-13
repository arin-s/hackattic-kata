let example = '{"Bradley": {"balance": 9574723, "account_number": 1848285}, "extra": {"balance": -6804429}}';
let person = {name: null, balance: null};
    let json = JSON.parse(example);
    person.name = Object.keys(json)[0];
    if(json[person.name].hasOwnProperty("extra"))
        person.balance = json[person.name].extra.balance;
    else
        person.balance = json[person.name].balance;
console.log(person.balance);