// Array.prototype.map()

var numbers = [1, 2, 3, 4, 5, 6];

var result = numbers.map((num) => {
    return 2 * num;
});

console.log(numbers);
console.log(result); // [2, 4, 6, 8, 10, 12]