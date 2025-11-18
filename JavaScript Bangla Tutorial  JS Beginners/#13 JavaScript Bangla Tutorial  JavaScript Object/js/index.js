const car = {
    name: "Fiat",
    model: 500,
    weight: "850kg",
    color: "white",
    start: function () {
        this.drive(); // In a function definition, this refers to the "owner" of the function.
        console.log("car has started");
    },
    drive: function () {
        console.log("car is driving");
    }
};

// accesses object
console.log(car.weight);
console.log(car["model"]); //
// console.log(car[model]); // reference error: model is not defined
// car.start();


// let x = "Rahim"; // literal syntax
// let x = new String("Rahim");

// let x = 5; // literal syntex
let x = new Number(5);
console.log(typeof x);

// JavaScript Objects - Quiz 11
function sayHi() {
    console.log(name); // undefined
    // console.log(age); // Uncaught ReferenceError: Cannot access 'age' before initialization
    var name = "JavaScript";
    let age = 21;
}

sayHi(); // Function invocation

// "use strict";
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        const selfThis = this;
        (function (selfThis) {
            // console.log("regular function: ", this.id); // undefined 
            console.log("regular function: ", selfThis.id);
        })(selfThis);

        (function () {
            console.log("regular with call: ", this.id); // undefined 
        }).call(this);

        (function () {
            console.log("regular with apply: ", this.id); // undefined 
        }).apply(this);

        (function () {
            console.log("regular with bind: ", this.id); // undefined 
        }).bind(this)();

        (() => {
            console.log("arrow function: ", this.id); // undefined 
        })();

        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName());


/* JS Object Properties */

const personProperties = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

console.log(personProperties);
delete personProperties.age; // deletes both the value of the property and the property itself.
console.log(personProperties);


/* JS Object Methods */

/* JS Object Display */
// Displaying a JavaScript object will output [object Object].
// Displaying the Object Properties by name
// Displaying the Object Properties in a Loop
// Displaying the Object using Object.entries(), Object.keys(), Object.values()
// Displaying the Object using JSON.stringify()

// by loop
const personDisplay = {
    name: "John",
    age: 30,
    city: "New York"
};

for (const key in personDisplay) {
    console.log(key + ": " + personDisplay[key]); // . access will not work
}

// Object.values()
console.log(`Object.values(): `, Object.values(personDisplay));

// Object.entries()
console.log(`Object.entries(): `, Object.entries(personDisplay));

// Object.keys()
console.log(`Object.keys(): `, Object.keys(personDisplay));

// JSON.stringify
const personJson = { "name": "John", "age": 50, "city": "New York" };
console.log(personJson);
console.log(JSON.stringify(personJson));



/* JS Object Constructors */
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = `English`; // default value
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`;
    };
}


// adding a properties to a constructor (only can with prototype)
Person.prototype.species = "Human";
Person.prototype.changeName = function (name) {
    this.lastName = name;
};

const mySelf = new Person(`Johnny`, `Rally`, 22, `green`);
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");

myFather.salary = `10000$`; // change a property on object

console.log(Person);
console.log({ mySelf }, { myFather }, { myMother }, { mySister });

console.log(mySelf.fullName());
mySelf.changeName("Doe");
console.log(mySelf.fullName());
