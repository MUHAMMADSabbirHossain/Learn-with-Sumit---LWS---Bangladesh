// let a = `Bangladesh`;

// multiple lines
// let a = `My life
// my rule`;
// console.log(a);

// interpolation
let country = 'Bangladesh';
let a = 17;
let b = 1;

// let sentence = 'I love ' + country + 'and it is a big country';

// variable substitution
// let sentence = `I love ${country} and it is a big ${country}`;

// expression substitution
let sentence = `I love ${country} and it's population is ${a + b}`;





// selfTest
/* What is the difference between charAt() and charCodeAt() in JavaScript? Provide an example for each.

this two are string stirng methods. 

charAt() return the charecter at a specific index from a string. it takes an index as an argument.
charCodeAt() is used for return the unicode value of a character. it takes an index as an argument.  */

/* How can you check if a specific substring exists within a string in JavaScript? Provide at least two different methods.

const test = `this is a specific testing substring.`;

// inclues() method helps to get the substring string index. it returns boolean value true or false.
console.log(test.includes(`testing`)); // true

// indexOf() method is used to get the substring string index. it returns the index value. if the substring is not found then it returns -1. it can also take a start index as a second argument.
console.log(test.indexOf(`testing`)); // 19

// lastIndexOf() method is used to get the substring string index. it returns the index value. if the substring is not found then it returns -1. it can also take a start index as a second argument which is optional and find the substring from reverse order.
console.log(test.lastIndexOf(`testing`)); // 19

// search() method is used to get the substring string index. it returns the index value. if the substring is not found then it returns -1.
console.log(test.search(`testing`)); // 19

// match() method is used to get the substring string index. it returns the index value. if the substring is not found then it returns null.
console.log(test.match(`testing`).index); // 19
*/


/* How can you extract a portion of a string in JavaScript? Provide at least three different methods and explain their differences. 

const text = "JavaScript is a versatile programming language.";
console.log(text.slice(0, 10));
console.log(text.slice(-47, -37));

console.log(text.substring(0, 10));

console.log(text.substr(0, 10));
*/


/* How can you repeat a string multiple times in JavaScript? Provide an example and explain how it works.

const test = `specific repeat testing substring.`;
console.log(test.repeat(3));
 */

/* How can you replace a substring within a string in JavaScript? Provide an example and explain the method used.

// replace() method is case sensitive and change the frist occurrence of a substring.
const test = `replace: specific replace testing substring.`;
console.log(test.replace(`replace`, `replaced`)); // replaced: specific replace testing substring.
// replaceAll() method is case sensitive and change all occurrence of a substring.
console.log(test.replaceAll(`replace`, `replaced`)); //replaced: specific replaced testing substring.
 */

/* How can you convert a string to uppercase and lowercase in JavaScript? Provide examples for both methods. 

const test = `Uppercase and Lowercase testing`;
console.log(test.toUpperCase()); // UPPERCASE AND LOWERCASE TESTING
console.log(test.toLowerCase()); // uppercase and lowercase testing
*/

/* How can you remove whitespace from the beginning and end of a string in JavaScript? Provide an example and explain how it works.

const test = `   Whitespace    testing   `;
console.log(test.trim());
console.log(test.trimStart());
console.log(text.trimEnd());
 */


/* How can you split a string into an array in JavaScript? Provide an example using the split() method and explain how it works.

const test = `split: testing substring.`;
console.log(test.split(`:`));
console.log(test.split(` `, 2));
console.log(test.split(` `, -2)); // negative value is ignored
console.log(test.split(``));
 */


const test1 = `This is a string.`;
const test2 = `This is a string.`;

console.log(test1.concat(` `, test2));

