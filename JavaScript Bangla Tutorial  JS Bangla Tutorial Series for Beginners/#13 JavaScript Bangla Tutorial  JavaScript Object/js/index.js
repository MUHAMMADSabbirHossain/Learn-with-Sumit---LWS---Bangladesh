// const car = {
//     name: "Fiat",
//     model: 500,
//     weight: "850kg",
//     color: "white",
//     start: function () {
//         this.drive(); // In a function definition, this refers to the "owner" of the function.
//         console.log("car has started");
//     },
//     drive: function () {
//         console.log("car is driving");
//     }
// };

// // accesses object
// console.log(car.weight);
// console.log(car["model"]); //
// car.start();


// let x = "Rahim"; // literal syntax
// let x = new String("Rahim");

// let x = 5; // literal syntex
let x = new Number(5);
console.log(typeof x);


function sayHi() {
    console.log(name);
    console.log(age);
    var name = "JavaScript";
    let age = 21;
}

sayHi(); // Function invocation
