/* self test */
console.log(`Array is a special type of object with number index. so it is included build in some extra properties`);

/* How can you create an array in JavaScript? Mention at least three different methods of creating arrays.
 */
const arr1 = [1, 2, 1, 3, 2, 4, 5];
const arr2 = new Array(1, 2, 3, 4, 5);
const textArray = ["a", "B", "z", "Z"];
const flattenArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(arr1, arr2);


/* How can you add and remove elements from an array in JavaScript?

console.log(arr1.push(6)); // add element at last
console.log(arr1.pop()); // remove last element
console.log(arr1.shift()); // remove first element
console.log(arr1.unshift(0)); // add element at first
console.log(arr1.splice(2, 1, 7, 8)); // remove an element at index 2 and 7, 8
console.log(arr1[arr1.length] = 9);
console.log(arr1);
 */


/* How do you check if a value is an array in JavaScript?

console.log(typeof arr1); // object

console.log(Array.isArray(arr1)); // true

console.log(arr1 instanceof Array); // true
*/

/* What are some common ways to iterate over an array in JavaScript?

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

function testingArray(element, index, array) {
    console.log(element)
    return element;
};
arr1.forEach(testingArray);

arr1.map(testingArray);

arr1.filter(testingArray);

arr1.reduce(function (accumulator, element) {
    console.log(accumulator);
    return accumulator + element;
}, 0);

arr1.reduceRight(function (accumulator, element) {
    console.log(accumulator);
    return accumulator + element;
}, 0);

arr1.every(function (element) {
    console.log(element);
    return element > 0;
});

arr1.some(function (element) {
    console.log(element);
    return element > 0;
});

arr1.find(function (element) {
    console.log(element);
    return element > 0;
});

arr1.find(function (element) {
    console.log(element);
    return element > 0;
});

arr1.findIndex(function (element) {
    console.log(element);
    return element > 0;
});
 */


/* How can you merge two or more arrays in JavaScript?

console.log(arr1.concat(arr2)); // concat method
console.log([...arr1, ...arr2]); // spread operator
*/



/* How can you remove duplicate elements from an array in JavaScript?

console.log([...new Set(1, 2, 3, 2, 4, 5)]); 
console.log(arr1.filter((value, index, self) => self.indexOf(value) === index));

console.log(textArray.toSorted()); // text
console.log(arr1.toSorted(function (a, b) { return a - b })); // number
 */

/* How can you check if all or some elements in an array satisfy a condition?

console.log(arr1.every((element) => element > 0));
console.log(arr1.some((element) => element > 0));
 */




/* How can you flatten a nested array in JavaScript?

console.log(flattenArray.flat()); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(flattenArray.flatMap(element => element)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
*/



/* How can you find the index of an element in an array?

console.log([1, 5, 1, 5, 6, 87, 9, 3, 0].indexOf(87));
*/






