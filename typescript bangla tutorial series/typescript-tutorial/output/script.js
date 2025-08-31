"use strict";
/* console.log("Hello World");

const country = "I love Bangladesh";
console.log(country); */
Object.defineProperty(exports, "__esModule", { value: true });
/* let playerName = "Mashrafi";
let age = 35;

console.log(playerName);

playerName = 34;
age = 34;
age = "string";

console.log(playerName); */
/* let playerName;
console.log(playerName);

playerName = "Mashrafi";
console.log(playerName);

playerName = 34;
console.log(playerName); */
/* function multiply(a: number, b: number) {
  return a * b;
}
console.log(multiply(5, 6));
console.log(multiply("string", "6")); // should not do this */
/* // array
let fruits = ["apple", "banana", "orange", "mango", 200, true];
console.log(fruits);

fruits.push("pineapple");
console.log(fruits);

fruits.push({ name: "apple" }); // Argument of type '{ name: string; }' is not assignable to parameter of type 'string | number | boolean'.ts(2345)
console.log(fruits); */
/* // object
let person = {
  name: "Sumit",
  age: 35,
  isCaptain: true,
  getName: function () {
    return "Sumit";
  },
};

person.name = "Sumit";
person.age = "5"; // Type 'string' is not assignable to type 'number'.
person.isCaptain = true;
person.country = "Bangladesh"; // Property 'country' does not exist on type '{ name: string; age: number; isCaptain: boolean; getName: () => string; } */
/* let a: string;
let b: number | boolean;

a = "string";
b = 34;
b = true;

let array: (string | number | boolean | object)[] = [
  "string",
  34,
  true,
  { name: "apple" },
  [1, 2, 3],
];

let c: {
  name: string;
  age: number;
  isCaptain: boolean;
  getName: () => null | number | string;
};

c = {
  name: "Sumit",
  age: 35,
  isCaptain: true,
  getName: function () {
    return 34;
  },
};
 */
/* let a: any;
a = 34;
a = "string";
a = true;
a = { name: "apple" };
a = [1, 2, 3];

let b: any[];
b = ["string", 34, true];
b = [1, 2, 3];

let c: {
  name: any;
  age: any;
  isCaptain: any;
  getName: any;
}; */
//# sourceMappingURL=script.js.map