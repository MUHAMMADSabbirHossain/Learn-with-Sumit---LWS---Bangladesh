// Create a Map
const fruits = new Map();

// Set Map Values
/* fruits.set(4000, 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200); */

fruits.set("apple", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
fruits.set(4000, 500); // 500 key can be any data type
const appleObj = { name: `Apple`, price: 999 };
fruits.set(appleObj, 500); // key can be any data type
console.log(fruits.get(4000));
console.log(fruits.get(appleObj)); // 500


console.log({ fruits });
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