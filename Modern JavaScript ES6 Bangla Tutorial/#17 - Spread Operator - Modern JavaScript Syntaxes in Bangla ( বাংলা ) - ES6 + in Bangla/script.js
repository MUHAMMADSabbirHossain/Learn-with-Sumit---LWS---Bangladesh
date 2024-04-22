// spread operator
/* var numbers = [1, 2, 3];

var newNumbers = [...numbers, 4, 5, 6];
console.log(newNumbers);
var a = [...numbers]; // exact copy of numbers

numbers.push(4);
console.log(a);
var numbers1 = [1, 2, 3];
var numbers2 = [4, 5, 6];

var numbers = [...numbers1, ...numbers2];
console.log(numbers); */

// object spreading
var myObj1 = {
    x: 1,
    y: 2

}
var myObj2 = {
    a: 1,
    b: 2

}

console.log({
    ...myObj1,
    ...myObj2
});