// Array.prototype.findIndex()
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var result = numbers.findIndex((currentValue, index, arr) => {
    // return !(currentValue % 2);
    // return currentValue > 6; // 6
    return currentValue > 20; // -1
}, this);

console.log(result);
