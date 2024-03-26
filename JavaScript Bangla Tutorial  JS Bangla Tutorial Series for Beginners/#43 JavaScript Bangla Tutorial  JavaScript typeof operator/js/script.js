let a = "Bangladesh";
// let b = "I love";
let b = 71;

let c = b + " " + a;

console.log(c);
console.log(typeof c); // string
console.log(null); // null
console.log(typeof null); // object

console.log(typeof { fname: 'bangladesh', age: 50 }); // object
console.log(typeof typeof { fname: 'bangladesh', age: 50 }); // string

function isArray(myArray) {
    console.log(myArray.constructor); // ƒ Array() { [native code] }
    console.log(myArray.constructor.toString()); // function Array() { [native code] }

    console.log(myArray.constructor.toString().indexOf("Array")) // 9 that means Array word existed.
    // simple version
    console.log(myArray.constructor === Array);
}

isArray([1, 2, 3]);

isArray({ fname: "Sumit" }) // -1
