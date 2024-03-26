// Create a Map
const fruits = new Map();

// Set Map Values
/* fruits.set(4000, 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200); */

fruits.set("apple", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

console.log(fruits);
console.log(fruits.get('bananas'));

const person = {
    fname: "Bangladesh"
}

console.log(person['fname']);

// List all entries
let test = "";
for (const x of fruits.entries()) {
    test += x;
    console.log(x);
}

console.log(test);