// destructuring
const user = {
    id: 339,
    name: "Sakib",
    age: 35,
    // education: {
    //     degree: "Masters",
    // },
}

// object theke name take ber kore ene arekta variasble e assign korte chai jeno onno jaygay use korte pari

// var name = user['name'];
/* const { name } = user;
const { name: title } = user;
console.log(name);
console.log(title); */

const { education: { degree } = {} } = user;
// const { education: { degree: x } } = user;
// console.log(x);
console.log(degree);

// array destructuring
var numbers = [1, 2, [3, 100, 500], 4, 6];

// var [, a, , , b] = numbers;
var [, , [, a, b]] = numbers

console.log(a, b);

// swap
var a = 1;
var b = 2;

// the old way
/* var temp = a;
a = b;
b = temp;
console.log(a, b); */

[b, a] = [a, b];
console.log(a, b);