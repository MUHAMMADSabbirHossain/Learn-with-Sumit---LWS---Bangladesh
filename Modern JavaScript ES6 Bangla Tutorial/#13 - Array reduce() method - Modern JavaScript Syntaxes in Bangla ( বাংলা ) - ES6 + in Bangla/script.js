// Array.prototype.reduce()
var numbers = [1, 2, 3, 4, 5, 6];
var sum = numbers.reduce((preValue, currentValue, currentIndex, arr) => {
    return preValue + currentValue;
}, 0);
console.log(sum); // 21