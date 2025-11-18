// "use strict"; //

/* let b = 200;
{
    var a = 10;
    let b = 20;
    const c = 30;
    g = 40; // index.js:8 Uncaught ReferenceError: g is not defined
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(g);
}
console.log(a);
console.log(b);
// console.log(c); // ReferenceError: c is not defined
console.log(g);

let carName = "Volvo";
function A() {
    console.log(carName);
    // console.log(window.carName); // undefined

} A(); // Volvo */


// self study

/* What are the different types of scope in JavaScript?

scope is current context of execution where values and expressions are referenced. In JavaScript,
there are 3 types of scope in JavaScript.
1. Global Scope: this is the first obj which put inside in stack memory of js engine.
2. Function Scope: every function defination is write in heap memory and they refrence by indentifier in stack memory.
3. Block Scope: space between {} is block scope. let and const are block scope variable. 
*/

/* let a = 5;
function outer() {
    let a = 10;

    function inner() {
        console.log(a);
    }
    return inner;
}
const myFunction = outer();
myFunction(); */

/* var a = 1;
function outer() {
    console.log(a); // Line 1 1
    var a = 2;
    console.log(a); // Line 2 2
}
outer(); */

/* let x = 10;
function test() {
    console.log(x); // Line 1 reference error
    let x = 20;
    console.log(x); // Line 2
}
test(); */

/* let x = 10;
function outer() {
    console.log(x); // Line 1 reference error
    let x = 20;
    function inner() {
        console.log(x); // Line 2 20
    }
    inner();
}
outer(); */

/* function createCounter() {
    let count = 0;
    return {
        increment: function () {
            count++;
            console.log(count); // Line 1
        },
        reset: function () {
            count = 0;
            console.log(count); // Line 2
        },
    };
}

const counter = createCounter(); // new execution context
counter.increment(); // Line 3 1
counter.increment(); // Line 4 2 
counter.reset(); // Line 5 0
counter.increment(); // Line 6 1 */


/* function createArray() {
    let arr = [];
    for (var i = 0; i < 5; i++) { // let will fixed
        arr.push(function () {
            return i;
        });
        console.log(arr[i]);
    }
    return arr;
}

const myArray = createArray();
console.log(myArray[0]()); // Line 1
console.log(myArray[4]()); // Line 2 */

/* for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), i * 1000); // 0:sec 0, 1sec: 1, 2sec: 2
}

for (var j = 0; j < 3; j++) {
    console.log({ j });
    setTimeout(() => console.log(j), j * 1000); // 0:sec 3, 1sec: 3, 2sec: 3 
} */


/* function outer() {
    var count = 0;

    return function inner() {
        count++;
        console.log(count); // Line 1
    };
}

const counter1 = outer(); // new execution context
const counter2 = outer(); // new execution context 

counter1(); // Line 2 1
counter1(); // Line 3 2
counter2(); // Line 4 1
counter1(); // Line 5 3 */


/* function createCounter(start) {
    return {
        increment: function () {
            start++;
            console.log(start); // Line 1 // same start variable
        },
        decrement: function () {
            start--;
            console.log(start); // Line 2 // same start variable
        },
    };
}

const counter = createCounter(5); // new execution context

counter.increment(); // Line 3 6
counter.increment(); // Line 4 7
counter.decrement(); // Line 5 6

const anotherCounter = createCounter(10); // new execution context
anotherCounter.increment(); // Line 6 11
anotherCounter.decrement(); // Line 7 10 */


/* function makeAdder(x) {
    return function (y) {
        return x + y; // Line 1
    };
}
const add5 = makeAdder(5); // Line 2
const add10 = makeAdder(10); // Line 3

console.log(add5(2)); // Line 4 7
console.log(add10(3)); // Line 5 13
console.log(add5(10)); // Line 6 15 */


/* var foo = "a"
function showName() {
    foo = "b" // b will be local variable cause foo function helps to treat as local variable in memory allocation time. Inside showName, the line function foo() {} is hoisted to the top of the function scope. This creates a local variable foo within showName. The local foo shadows the global foo for the entire function.
    return;
    function foo() { }
}
showName()
console.log(foo) // ; */

/* let a = NaN;
let b = NaN;
console.log(a == b); // false
console.log(a === b); // false
console.log(isNaN(a)); // ture
*/






