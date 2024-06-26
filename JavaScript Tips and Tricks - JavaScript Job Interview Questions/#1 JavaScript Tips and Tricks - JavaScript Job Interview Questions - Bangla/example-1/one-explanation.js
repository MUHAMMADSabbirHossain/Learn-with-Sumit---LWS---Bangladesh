// Boolean(expression) in JS returns true/false
Boolean(5 < 6); // ture
Boolean(100 > 200); // false
Boolean('JavaScript'); // true
Boolean(''); // false

// array example
let miscellaneous = ['🍎', false, '🍊', NaN];
// let fruits = miscellaneous.filter(function (element) { return false; });
let fruits = miscellaneous.filter(Boolean);

console.log(fruits); // ['🍎','🍊']