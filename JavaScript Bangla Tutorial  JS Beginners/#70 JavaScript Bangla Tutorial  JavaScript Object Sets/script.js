// /* const letters = new Set(["a", "b", "c", "a", "b"]);

// console.log(letters); */

// /* const letters = new Set();

// console.dir(letters); */

const letters = new Set(["a", "b", "c", "a", "b"]);

for (let a of letters) {
    console.log(a);
}


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

const lettersTest = new Set(["a", "b", "c", "a"]);
console.log({ lettersTest });
const lettersTestObj = lettersTest.values();
console.log({ lettersTestObj });
console.log(lettersTest.values());
console.log(lettersTest.keys()); // no keys so return same as values
console.log(lettersTest.entries());
console.dir(lettersTest);

for (element of lettersTest) {
    console.log(element);
}
for (element of lettersTestObj) {
    console.log(element);
}

// for in loop is not working with set
// for (element in lettersTestObj) {
//     console.log(element);
// }
// for (element in lettersTest) {
//     console.log(element);
// }