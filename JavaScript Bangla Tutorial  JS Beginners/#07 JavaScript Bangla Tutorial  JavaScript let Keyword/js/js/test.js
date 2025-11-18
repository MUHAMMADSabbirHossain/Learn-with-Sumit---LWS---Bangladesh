/* Redeclaring Variables
The `let` keyword was introduced in [ES6 (2015)](https://www.w3schools.com/js/js_es6.asp)

Variables declared with `let` have **Block Scope**

Variables declared with `let` cannot be **Redeclared** in the same scope

Redeclaring a variable using the `var` keyword can impose problems.iables declared with `let` must be **Declared** before use */

// let x = "John Doe";
// let x = 0;

/* Block Scope
Before ES6 (2015), JavaScript did not have Block Scope.
JavaScript had Global Scope and Function Scope.
ES6 introduced the two new JavaScript keywords: let and const.
These two keywords provided Block Scope in JavaScript: 
Variables declared inside a { } block cannot be accessed from outside the block:*/

// var x = 5;
// function sleep() {

// }

// sleep();
let x = 7;
if (true) {
    let x = 6;
    console.log(x); // 6
}

console.log(x); // 7 Uncaught ReferenceError: x is not defined

// hoisted

// carName = undefined;
// carName = "Volvo"; // hoisted in memory cycle
// var carName;
// console.log(carName); // Volvo

// let carName;
// carName = "Volvo";
let carName;
console.log(carName); // Uncaught ReferenceError: Cannot access 'carName' before initialization

/* var and let two of them hoisted but var assign undefine as default value but let does not and that’s why we can not access and assigned a variable with a default value later execution cycle time. */



var p = 10;
function m() {
    q = 20; // impliet declaration, global scope
    // var q = 20; // function scope, reference error if outside of function scope
    console.log(p, q);

} m();

console.log(p, q);