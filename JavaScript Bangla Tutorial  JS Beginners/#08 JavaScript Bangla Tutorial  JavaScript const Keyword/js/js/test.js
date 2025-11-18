// let a; // declare
// a = 5; // assign or initialize

// a = 7 // reassign

// const a = 5;
// a = 7; // reassign does not allowed

/* not allowed 
const a;
a= 5; */

// It does not define a constant value. It defines a constant reference to a value.
const a = [1, 2, 3, 4,]; // reference cannot be changed but the value in the heap memory can be changed

let p = [1, 2, 3, 4,];
p = [5, 6, 7, 8,];
console.log(p); // reference change

const b = 5;

const x = "Bangladesh";

console.log(x);