const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;

console.log(typeof cars);

const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits[4] = "Pineapple";
fruits[5] = "Pineapples";
fruits[6] = "Pineappless";
fruits[7] = "Pineapplesss";

console.log(fruits[3]); // 

console.log(fruits[fruits.length - 1]);


for (let i = 0; i < fruits.length; i++) {
    console.log("index: ", i, "value: ", fruits[i]);
}

function myFunction(value, index, array) {
    console.log("forEach: ", value, index, array);
}

fruits.forEach(myFunction)
console.log("Finished");



const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
person.length;     // Will return 0
person[0];         // Will return undefined
console.log(person);
console.log(person.length) // 0
// person.forEach(console.log('sdf')); // not work cause name index array lost some attribute for treating as object

const numbers = [1, 2, 3,];
const person2 = {
    name: 'Sumit',
    age: 35,
    country: 'Bangladesh',
};
console.log(numbers)
console.log(person2)

// Create an array with three elements:
const points = new Array(40, 100, 1);
console.log(points);
console.log(Array.isArray(points), points instanceof Array, points instanceof Object,);


// Create an array with one element ???
const points2 = new Array(40);
console.log(points2);

console.log(typeof numbers);
console.log(Array.isArray(numbers));
console.log(numbers instanceof Array); // true
console.log(numbers instanceof Object); // ture
console.log(typeof person2);
console.log(Array.isArray(person2));
console.log(person2 instanceof Array); // false
console.log(person2 instanceof Object); // ture

