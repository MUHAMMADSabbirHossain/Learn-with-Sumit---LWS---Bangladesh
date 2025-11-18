/* let a = "Sakib";

for (let x of a) {
    console.log(x);
} */

let a = [4, 5, 7, 9, 10];
for (let x of a) { // const will work
    console.log(x);
}

for (i = 0; i < 10; i++) { // const not work
    console.log(i);
}

let fruits = [1, 3, 5, 7];
fruits.reverse();

for (let fruit in fruits) {
    console.log(fruit); // index
    console.log(fruits[fruit]); // value
}


// for (const i = 0; i < 10; i++) {
//     console.log("outer: ", i);
//     setTimeout(() => {
//         console.log("inner: ", i);

//     }, i * 1000);
// }

