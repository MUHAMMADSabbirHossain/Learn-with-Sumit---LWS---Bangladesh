// let x = 123;
// let newN = x.toString();
// console.log(typeof x); // number
// console.log(typeof newN); // string

let x = 9.656000000000;
console.log(x.toExponential(2)); // 9.56e+11
console.log(x.toExponential());

let n1 = 123;
let n2 = new Number(123);

console.log(parseInt("10.33 20 30")); // 10
console.log(parseFloat("10 years")); // 10
console.log(parseFloat("years ")); // NaN