// Array.prototype.splice()
var numbers = [1, 2, 3, 4, 5];

// var result = numbers.splice(1, 2, 10, 12, 19); // [2, 3] 
var result = numbers.splice(-1, 2, 10, 12, 19); // [1, 2, 3, 4, 10, 12, 19]
console.log(numbers); // [1, 10, 12, 19, 4, 5]
console.log(result);