/* const add = function () {
    let counter = 0;
    return function () { counter += 1; return counter }
};
console.log(add);
console.log(add()); */




// local varibal can access and have short life acording to scope
/* let a = 4;
function myFunction() {
    return a * a;
}
console.log(myFunction()); */




// parent varibal can access life according to parent scope
/* let a = 4;
function myFunction() {
    return a * a;
}
console.log(myFunction()); */





// auto global varibal can access life according to window scope
function myFunction() {
    a = 4;
    return a * a;
}
console.log(myFunction());






function temporary() {
    let counter = 0;
    return function () {
        counter += 1;
        return counter;
    };
}
const add = temporary(); // new functinal context
const add2 = temporary(); // new functinal context


console.dir(add);
console.dir(add2);
console.log(add());
console.log(add2());

console.log(add); // 
console.log(add2);
console.log(add());
console.log(add2());

console.dir(add);
console.dir(add2);
console.log(add());
console.log(add2());




// const script2Const = "script2Const"; // already declareḍ in script2.js
