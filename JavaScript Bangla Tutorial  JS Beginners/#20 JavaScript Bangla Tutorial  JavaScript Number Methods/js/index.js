// let x = 123;
// let newN = x.toString();
// console.log(typeof x); // number
// console.log(typeof newN); // string

let x = 9.656000000000;
console.log(x.toExponential(2)); // 9.56e+11
console.log(x.toExponential());

let n1 = 123;
let n2 = new Number(123);

console.log(Number(`10 years`));


console.log(parseInt("10.33 20 30")); // 10
console.log(parseFloat("10 years")); // 10
console.log(parseFloat("years ")); // NaN

console.log((`This is literal strings`).charAt(2));


/* self study */
/* What is the difference between Number() and parseInt() in JavaScript?
😊
// parseInt() method is used to convert string to integer number.
console.log(parseInt("10 years")); // 10
console.log(parseInt("10.33 20 30")); // 10
console.log(parseInt(`years 10`)); // NaN
console.log(parseInt(10.65421)); // 10
console.log(parseInt(true)); // NaN


// Number() method is used to convert string to number. it does not take argument as a string. it has some special properties like EPSILON, MAX_SAFE_INTEGER, MIN_SAFE_INTEGER. and i thik this is a property of global object.
console.log(Number("10 years")); // NaN
console.log(Number("10.33 20 30")); // NaN
console.log(Number(`years 10`)); // NaN
console.log(Number(10.65421)); // 10.65421
console.log(Number(true)); // 1
 */

/* What is the difference between Number.isNaN(value) and the global isNaN(value) function?

console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("NaN")); // false , dont do type coercion

console.log(isNaN(NaN)); // true
console.log(isNaN("NaN")); // ture , does type coercion
*/

/* What is the difference between Number() and parseFloat() in JavaScript?

// Number() is a method of Number object. it does not support coersion, it output 1 or 0 boolean value as argument
console.log(Number("10.33 20 30")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 1


// parseFloat() is a method of global object. it does support coersion. it output NaN for boolean value as argument
console.log(parseFloat("10.33 20 30")); // 10.33
console.log(parseFloat(true)); // NaN
console.log(parseFloat(false)); // NaN
 */

/* How does JavaScript handle arithmetic operations with NaN (Not-a-Number), and what is the result of performing such operations?
// with any arithmetic operation, NaN will be returned NaN
console.log(NaN + 1); // NaN
console.log(NaN - 1); // NaN
console.log(NaN * 1); // NaN
console.log(NaN / 1); // NaN
console.log(NaN + "1"); // NaN1
 */


/* What is the difference between Math.random() and Math.random() with a custom range (e.g., Math.random() * (max - min) + min)?
const text = Math.random();
console.log(text); // 0 to 1 float number
console.log(text * 10); // 0-9
console.log(text * 10 + 1); // 1-10
console.log(text * (10 - 1) + 1); // always return number between min to max
 */


/* How does JavaScript handle the behavior of Infinity and -Infinity, and what are some typical use cases for these values?

console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
console.log(typeof Infinity); // number data type
console.log(typeof -Infinity); // number
console.log(new Number(Infinity) instanceof Number); // true, Infinity is a number;
 */

/* What are the different ways to parse a string into a number in JavaScript, and what are the potential issues with each method?

console.log(parseInt("10 years")); // 10
 */

/*  What are Number.MAX_VALUE, Number.MIN_VALUE, and how do they differ from Number.MAX_SAFE_INTEGER and Number.MIN_SAFE_INTEGER?

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308, max positive number veriable of javascript.  Values larger than this result in Infinity.
console.log(Number.MIN_VALUE); // 5e-324 ,Represents the smallest positive number greater than 0 (close to zero). It does not represent negative values.
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991, max positive number range that can safely be calculated
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991, 9007199254740991, min negative number range that can safely be calculated
 */

/* What are the key differences between toFixed() and toPrecision() methods in JavaScript, and when would you use each? 

// both are global methods, round the number
console.log(1.2345.toFixed(2)); // 1.23 // toFixed() method is used to limit the number of digits after the decimal point.
console.log(1.2345.toPrecision(2)); // 1.23 // toPrecision() method is used to limit the number of total digits (including the decimal point).
*/

/* What is BigInt in JavaScript, and why is it introduced?

// BigInt is used to store large integers. can be declared using the "n" suffix or BigInt(). it can not with float number. it is a primitive data type.
console.log(BigInt(1234567890123456789012345678901234567890));
console.log(46465645645454564564545644554n);
console.log(0x9999A9999B99n);
console.log(0o777777777n);
console.log(0b01111111000111n);

// BigInt number can not operation with normal number, but both bigint can operation with each other
// console.log(123456789012345678890 + 1234567890123456780n); // error
console.log(1234567890123456789012345678901234567890n * 1234567890123456789012345678901234567890n); // error
 */

console.log(12321312312, BigInt(12321312312));

console.log(1111111111111111n > 111111111111111); // true
console.log(111111111111111 > 111111111111111n); // false



