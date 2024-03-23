let x = 6;
let y = "6";

console.log(x == y); // true
console.log(x === y); // false

let age = 18;

if (age >= 18) {
    console.log("You are adult!");
}

if (age == 16 || age == 15 || age == 17) {
    console.log("You are adult!");
}

if (age >= 18) {
    console.log("You are adult");
} else {
    console.log("You are not adult!");
}

console.log(age >= 18 ? "Your are adult!" : "You are not adult!");

console.log(
    age >= 18
        ? (age < 30)
            ? "You are an adult!"
            : "You are old!"
        : "You are young!"
);
age > 18 ? console.log("You are adult") : console.log("You are not adult");;