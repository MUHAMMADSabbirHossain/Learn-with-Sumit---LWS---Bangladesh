// ternary operator
var age = 11;
/* var type;
if (age >= 18) {
    type = 'adult';
} else {
    type = 'child';
} */

// var type = (age >= 18) ? 'adult' : 'child';
var type = (age >= 18) ? 'adult'
    : (age < 10) ? 'child'
        : 'young';

console.log(type);

var a = 5;
var access = a > 5;
console.log(access);