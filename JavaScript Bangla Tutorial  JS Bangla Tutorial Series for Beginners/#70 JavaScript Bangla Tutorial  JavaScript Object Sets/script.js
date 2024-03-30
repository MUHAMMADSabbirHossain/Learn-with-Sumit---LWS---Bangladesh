// /* const letters = new Set(["a", "b", "c", "a", "b"]);

// console.log(letters); */

// /* const letters = new Set();

// console.dir(letters); */

// const letters = new Set(["a", "b", "c", "a", "b"]);

// for (let a of letters) {
//     console.log(a);
// }


// // const lettersIterator = letters.values();
// // for (let a of lettersIterator) {
// //     console.log(a);
// // }

// console.log(letters.values());
// console.log(letters.keys());
// console.log(letters.entries());
// const a = {
//     firstName: "sumit",
//     lastName: 'shah'
// }

// console.log(Object.entries(a));

// const myIterator = letters.entries();

// for (const entry of myIterator) {
//     console.log(entry);
// }

// console.log(typeof letters);
// console.log(letters instanceof Set);

const letters = new Set(["a", "b", "c", "a"]);

console.log(letters);
console.log(letters.values());
console.log(letters.entries());
console.dir(letters);

for (element of letters) {
    console.log(element);
}