const person = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(person);
// document.getElementById("demo").innerHTML = person; // [object Object]
document.getElementById("demo").innerHTML = person.name + ' is ' + person.age + ' years old.';

console.log(Object.values(person));
console.log(person)



/* const person = {
    name: "John",
    age: 30,
    city: "New York"
};
let txt = '';
for (let x in person) {
    // console.log(x);
    txt += person[x] + " ";
}

document.getElementById("demo").innerHTML = txt; */

/* const person = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(Object.values(person)); // convert object values in a array
const personArray = Object.values(person);
for (x of personArray) {
    console.log(x);
} */


/* const person = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(JSON.stringify(person));
console.log(typeof JSON.stringify(person)); */

/* const person = {
    name: "John",
    age: 30,
    city: "New York"
};
let myString = JSON.stringify(person);

document.getElementById("demo").innerHTML = myString; */


/* const person = {
    name: "John",
    age: function () { return 30; }
};
person.age = person.age.toString();

let myString = JSON.stringify(person);
document.getElementById("demo").innerHTML = myString; */


const arr = ["John", "Peter", "Sally", "Jane"];

let myString = JSON.stringify(arr);

console.log(typeof myString);
document.getElementById("demo").innerHTML = myString;
console.log(JSON.stringify(arr));
