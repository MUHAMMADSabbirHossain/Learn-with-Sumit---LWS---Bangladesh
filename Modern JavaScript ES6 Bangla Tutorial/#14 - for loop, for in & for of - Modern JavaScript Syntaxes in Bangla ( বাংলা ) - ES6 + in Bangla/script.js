// For loop, for in, for of

/* for (let i = 0; i <= 5; i++) {
    console.log(i);
} */
/* for (var i = 0; i <= 5; i++) {
    console.log(i);
}
console.log(i); */

// for in
const myObj = {
    name: "JavaScript",
    estd: "1995",
    founder: "Brendan Eich"
};

for (property in myObj) {
    console.log(property);
}

// for of
const myArray = [1, 2, 3, 4, 5];

for (element of myArray) {
    console.log(element); // return element
}
for (element in myArray) {
    console.log(element); // return index
}

const myString = "I love JavaScript";

for (element of myString) {
    console.log(element);
}
for (element in myString) {
    console.log(element);
}