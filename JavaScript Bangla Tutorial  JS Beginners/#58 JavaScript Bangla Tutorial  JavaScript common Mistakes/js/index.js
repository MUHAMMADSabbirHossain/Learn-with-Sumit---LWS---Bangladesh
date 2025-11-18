let x = 0.1;
let y = 0.2;
let z = x + y;
console.log(z);

/* const numbers = [1, 2, 3];

numbers[0]; */


const numbers = [];
numbers["sumit"] = 0;
console.log(numbers);
console.log(numbers["sumit"]); // 0

function myFunction(a) {
    let b = 10;
    b += a;
}

console.log(myFunction(3)); // undefined