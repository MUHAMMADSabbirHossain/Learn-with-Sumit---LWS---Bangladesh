const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14)

console.log(today);
console.log(someday);

/* self practice */

/* How can you create a new Date object in JavaScript?

console.log(new Date()); // new object locale
 // specific date
 // string
 // timestamp
*/

/* What are some common methods available for getting date and time components from a Date object in JavaScript?

console.log(new Date().getFullYear()); // better then getYear() method
console.log(new Date().getMonth());
console.log(new Date().getDate());

console.log(new Date().getDay());

console.log(new Date().getHours());
console.log(new Date().getMinutes());
console.log(new Date().getSeconds());
console.log(new Date().getTime());

// same goes with UTC time and utc and gmt are same
console.log(new Date().getTimezoneOffset());
*/


/*How can you set specific components of a Date object in JavaScript, such as year, month, day, or time?

console.log(new Date(2000, 0));
console.log(new Date(2000, 0, 1));
console.log(new Date(2000, 0, 1, 1));
console.log(new Date(2000, 0, 1, 1, 1));
console.log(new Date(2000, 0, 1, 1, 1, 1)); // year, month, day, hour, minute, second

console.log(new Date(1000000000)); // milisecond
*/

/* Explain the difference between toLocaleString(), toLocaleDateString(), and toLocaleTimeString() in JavaScript.

*/

console.log(new Date());
console.log(Date.now());

console.log(new Date().toLocaleString("bn-BD")); // 
console.log(new Date().toLocaleDateString()); // local date
console.log(new Date().toLocaleTimeString()); // locale time




