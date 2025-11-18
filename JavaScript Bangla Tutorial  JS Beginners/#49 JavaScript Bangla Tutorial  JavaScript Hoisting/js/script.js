x = 5; // assignment
console.log(x);

var x; // memory alocate by undefine 
// let x; // Uncaught ReferenceError: Cannot access 'x' before initialization

function A() {
    x = 5;
    console.log(x);
    // let x; // Uncaught ReferenceError: Cannot access 'x' before initialization
}
A();

// const must be initialize when ever it declears
// carName = "Volvo";
// const carName; // Uncaught SyntaxError: Missing initializer in const declaration (at script.js:15:7)


console.log(str);
var str = "Hello Peter "; // undefine

let babyAge = 1;
let isBirthday = true;

if (isBirthday) {
    let babyAge = 2;
    console.log(babyAge); // 2

}

console.log(babyAge); // 1

{
    console.log(typeof name); //Uncaught ReferenceError: Cannot access 'name' before initialization
    let name = "Kealan";
}

