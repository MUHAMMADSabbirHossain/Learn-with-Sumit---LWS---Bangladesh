/* let a = "Sakib";

for (let x of a) {
    console.log(x);
} */

let a = [4, 5, 7, 9, 10];
for (let x of a) {
    console.log(x);
}

for (i = 0; i < 10; i++) {
    console.log(i);
}

let fruits = [1, 3, 5, 7];
fruits.reverse();

for (let fruit in fruits) {
    console.log(fruit); // index
    console.log(fruits[fruit]); // value
}