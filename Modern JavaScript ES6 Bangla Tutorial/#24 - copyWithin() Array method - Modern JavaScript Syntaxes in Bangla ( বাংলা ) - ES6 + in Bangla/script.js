// copyWithin(target, start, end) , main array change kore
let a = ["JavaScript", "PHP", "Python", "Ruby", "C++", "RUST"];

// a.copyWithin(3, 2);
// a.copyWithin(6, 1, 2);
// a.copyWithin(3);
// a.copyWithin(-3, -1, -2); // nothing changed
a.copyWithin(-3, -2, -1);
console.log(a);