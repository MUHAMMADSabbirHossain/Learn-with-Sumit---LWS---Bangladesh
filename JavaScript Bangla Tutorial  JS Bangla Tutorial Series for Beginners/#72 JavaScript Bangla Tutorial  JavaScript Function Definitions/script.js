/* function sleep() {
    console.log("I am sleeping.");
}
sleep(); */

/* const a = function () {
    console.log("I am sleeping.");
};
a(); */

/* var a = 5;
function a(){

}
a = 5; */

/* // function expression can not be hoisted
console.log(a());
const a = function () {
    // adsfasdfad
}
 */

/* (function () {
    // code
    console.log("I am a");
})(); // self invoking function => IIFE */

/* function myFunction(a, b) {
    console.log("hello");
    // return a * b;
    // return undefined
}
const result = myFunction(3, 4) * 3; // function as value
console.log(result); // undefined */

/* function myFunction(a, b) {
    console.log("hello");
    // return a * b;
    // return undefined
}
console.log(typeof myFunction);
console.dir(myFunction); */

/* const a = {
    firstName: "sumit",
    sleep: function () {
        // method
    }
} */

/* const x = function (x, y) {
    console.log("I am a function");
    return x * y;
} 
const x = () => 5; */


/* const object = {
    a: 5,
    // b: function () {
    //     console.log(this.a);
    // } 
    b: () => {
        console.log(this.a);
    }
} */

const x = function (a, b) {
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments.length);
}
x(3, 4);