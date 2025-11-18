console.log(new Date(1647799200000));

console.log(new Date("March 21, 2022").toDateString()); // instance method of Date
// console.log(Date.toDateString()); // Uncaught TypeError: Date.toDateString is not a function
// console.log(new Date("March 21, 2022").parse()); // Uncaught TypeError: (intermediate value).parse is not a function
console.log(Date.parse("March 21, 2022")); // static method of date
console.log(Date.parse("Mon Jan 01 2024 06:00:00 GMT+0600 (Bangladesh Standard Time)")); // static method of date

console.log(new Date('2024')); // jan 1
