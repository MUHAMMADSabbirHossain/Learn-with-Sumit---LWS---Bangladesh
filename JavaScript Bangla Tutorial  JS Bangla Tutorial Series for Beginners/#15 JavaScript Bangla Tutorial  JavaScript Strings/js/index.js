// let text = "ABCDEFGHI JKLMNOPQRSTUV WXYZ";

// console.log(text.length); // 28

// let text = "We are the so-called \"Vikings\" from the north.";
// console.log(text); // We are the so-called "Vikings" from the north.

// let text = "We are the so-called \\Vikings\\ from the north.";
// console.log(text); // We are the so-called \Vikings\ from the north.

let text = "We are \tthe so-called Vikings from the north.";
console.log(text); // We are 	the so-called Vikings from the north.


let test = "adsf\bndksfz\fhasd\nfhjkal\rdjsfk\tjashdf\viyoycweiumqvweirudoh";
console.log(test); /* adsfndksfzhasd
fhjkaldjsfk	jashdfiyoycweiumqvweirudoh */


let x = "John";
let y = new String("John");

console.log(x == y); // true baeause of equal value
console.log(x === y); // false baeause of equal value but not equal datatype