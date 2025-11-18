/* let x = "John";
let y = new String("John")

console.log(x === y); // false */

/* const a = {
    name: 'Bangladesh',
    districts: 64,
    sleep: function () {

    }
};

const s = "Bangladesh";

console.log(s.length); */

// let str = "Apple, Banana, Kiwi";
// let banana = str.slice(7, 13);
// console.log(banana); // Banana
// console.log(str.length);
// console.log(str.slice(0, 5));  // Apple
// console.log(str.slice(-12, -7));
// console.log(str.slice(-4)); // Kiwi, 0 is not working

// console.log(str.substring(0, 5)); // Apple, can not accept negative

// console.log(str.substr(15, 4)); // Kiwi
// console.log(str.substr(-4)); // Kiwi


// replace
let str = "I love Sakina & Sakina";
console.log(str.replace("Sakina", "Zarina"));
// let zarina = str.replace("Sakina", "Zarina");
// console.log(zarina); // I love Zarina
// console.log(str); // I love Sakina

console.log(new String("Zarina"));


// split
let str1 = "I love Sakina";
let arr = str1.split(""); // each character is an element
console.log(arr);
