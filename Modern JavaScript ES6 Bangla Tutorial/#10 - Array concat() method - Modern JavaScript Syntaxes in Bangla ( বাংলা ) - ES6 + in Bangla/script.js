// Array.prototype.concat()

var numbers1 = [1, 2, 3, 4, 5];
var numbers2 = [6, 7, 8, 9, 10];
var numbers3 = [6, 7, 8, 9, 10];
var numbers4 = [6, 7, 8, 9, 10];

var result = numbers1.concat(numbers2, numbers3, numbers4);
console.log(result); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 6, 7, 8, 9, 10, 6, 7, 8, 9, 10]