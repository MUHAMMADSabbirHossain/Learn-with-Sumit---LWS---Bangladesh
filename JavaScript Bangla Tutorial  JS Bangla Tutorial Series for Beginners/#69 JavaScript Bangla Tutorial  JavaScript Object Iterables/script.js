/* const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
for (let n of numbers) {
    console.log(n);
}
console.log(numbers);
console.dir(numbers); */

// const numbers = {
//     one: 1,
//     tow: 2,
//     three: 3,
//     four: 4,
//     five: 5
// };

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// for (let n of numbers) {
//     console.log(n);
// }
// console.log(numbers);
// console.dir(numbers);

// const nums = [1, 2, 3];
// console.dir(nums[Symbol.iterator]());
// const numIterator = nums[Symbol.iterator]();

// console.log(numIterator.next());
// console.log(numIterator.next());
// console.log(numIterator.next());
// console.log(numIterator.next()); // done: true


// const myNumbers = {};

// // make it iterable
// myNumbers[Symbol.iterator] = function () {
//     let n = 0;
//     let done = false;
//     return {
//         next() {
//             n += 10;
//             if (n == 100) { done = true; }
//             return {
//                 value: n,
//                 done: done
//             }
//         }
//     }
// }

// for (let num of myNumbers) {
//     console.log(num);
// }


/* 
// self
const arrayNumbers = [1, 2, 3];
console.dir(arrayNumbers);

for (num of arrayNumbers) {
    console.log(num);
}

const objectNumbers = { one: 1, two: 2, three: 3 };
console.dir(objectNumbers);
// for (num of objectNumbers) {
//     console.log(num);
// }
for (num in objectNumbers) {
    console.log(num);
}

objectNumbers[Symbol.iterator] = function () {
    let n = 0;
    let done = false;
    return {
        next() {
            n += 10;
            if (n == 100) { done = true; }
            return {
                value: n,
                done: done
            }
        }
    }
}
for (num of objectNumbers) {
    console.log(num);
}
console.log(objectNumbers[Symbol.iterator]);
console.dir(objectNumbers[Symbol.iterator]);
 */