// function sleep(names, time) {
//     console.log(names + " is sleeping from " + time);
//     return 5;
// }

// console.log(names); // index.js:5 Uncaught ReferenceError: names is not defined
// sleep("Jasim", "10 PM"); // Jasim is sleeping from 10 PM
// sleep("Rahim", "11 PM"); // Jasim is sleeping from 10 PM
// sleep("Karim", "12 PM"); // Jasim is sleeping from 10 PM
// console.log("My name is Jasim"); // My name is Jasim

// // Function is called, the return value will end up in x
// let x = myFunction(4, 3);
// console.log(x); // undefined 

// function myFunction(a, b) {
//     // Function returns the product of a and b
//     console.log("hello");
//     // return a * b; // a function return undefined by default.
// }


// function myFunction() {
//     let carName = "Volvo";
//     console.log(carName);
// }

// myFunction();

var carName = "BMW";
function myFunction() {
    let carName = "Volvo";
    console.log(carName);
}

myFunction();

console.log(carName); // Uncaught ReferenceError: carName is not defined