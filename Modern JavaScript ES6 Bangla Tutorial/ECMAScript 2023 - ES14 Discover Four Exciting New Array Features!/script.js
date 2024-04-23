// original array
/* const arr = [1, 2, 3, 4, 5, 6];
// const reverseArray = arr.reverse();
const reverseArray = arr.toReversed();

console.log(reverseArray);
console.log(arr); */

/* const arr = [1, 2, 3, 4, 5, 6];
// const removedElement = arr.splice(2, 2, 100, 400);
// const removedElement = arr.splice(-2, 2, 100, 400);
const splicedArray = arr.toSpliced(-2, 2, 100, 400);
console.log(splicedArray, arr); */

/* const arr = [1, 2, 3, 4, 5, 6];

const result = arr.with(1, 400);

console.log(result, arr); */

/* // const arr = [11, 20, 5, 7, 1, 2, 6];
const arr = [7, 6, 2, 1, 4, 3];
const compare = function (a, b) {
    // return a-b;
    return b - a;
}
const sortedArr = arr.sort(compare);

console.log(sortedArr); */

const cars = [
    {
        type: "Volvo",
        year: 2016
    },
    {
        type: "Saab",
        year: 2001
    },
    {
        type: "BMW",
        year: 2010
    }
]

const result = cars.toSorted(function (a, b) {
    // return a.year - b.year;
    const x = a.type.toLowerCase();
    const y = b.type.toLowerCase();
    if (x < y) {
        return -1;
    } else if (x > y) {
        return 1;
    } else {
        return 0;
    }
});
console.log(result);
console.log(cars);
