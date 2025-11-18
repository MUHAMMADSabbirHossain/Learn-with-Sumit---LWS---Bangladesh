let age = 18;

if (age <= 18) {
    console.log("You are young!");
} else if (age == 18) {
    console.log("Welcome adult!");
} else if (age > 18 && age < 30) {
    console.log("Welcome adult!");
} else {
    console.log("You are old!");
}

switch (true) {
    case (age < 18):
        console.log("You are young!");
        break;
    case (age == 18):
        console.log("Welcome adult!");
        break;

    default:
        console.log("You are old!");
        break;
}

let accessories = ["m", "k", "h", "m", "c"];
console.log(accessories.pop("h"));

var year = 2020;

if (true) {
    console.log(year);
    let year = 2021;
}