/* const person = {
    firstName: 'sumit',
    lastName: 'shah'
};

console.log(person.firstName);
console.log(person['firstName']);

person.age = 34;
console.log(person); */


/* // Create a Map
const fruits = new Map();

// Set Map Values
fruits.set(20, 300);
fruits.set("apples", 500);
fruits.set("oranges", 200);

console.log(fruits); */

/* // Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

fruits.set("bananas", 500);
console.log(fruits);
console.log(fruits.size); */


/* // Create Objects
const apples = { name: 'Apples' };
const bananas = { name: 'Bananas' };
const oranges = { name: 'Oranges' };

// Create a Map
const fruits = new Map();

// Add new Elements to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);

console.log(fruits.get("apples")); // undefined
console.log(fruits.get(apples)); // 500 */


const person = {
    firstName: "john",
    lastName: "doe",
    id: 5566
};
person.name = function () {
    return this.firstName + " " + this.lastName;
}
console.log(person.name());

const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => { return 2 * Math.PI * this.radius }, // NaN
    test: p = function () {
        return 2 * Math.PI * this.radius
    }
}

/* Arrow functions don't have their own bindings to this , arguments , or super , and should not be used as methods. Arrow functions cannot be used as constructors. Calling them with new throws a TypeError . They also don't have access to the new.target keyword. */
console.log(shape.diameter());
console.log(shape.perimeter());
console.log(shape.test);


function bark() {
    console.log("Woof!");
}

bark.animal = "dog";
bark();

// console.log(bark());

let c = { greeting: "hey1" };
let d;
d = c;
c.greeting = "hello";
console.log(d.greeting);

console.log(Object.keys(c));


// Create Target Object
const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    nationality: "kangal",
};

// Create Source Object
const person2 = { firstName: "Anne", lastName: "Smith", lang: "en" };

// Assign Source to Target
Object.assign(person1, person2);

// Display Target
let text = Object.entries(person1);
console.log(text, person1, person2);
document.getElementById("demo").innerHTML = text.join("  |  ");

const fruits = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
];

const myObj = Object.fromEntries(fruits);
console.log(myObj);
console.log("values property", Object.values(person));
