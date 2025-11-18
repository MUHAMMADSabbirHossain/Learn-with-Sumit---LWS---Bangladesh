let i = 0;
let text = "";
/* while (i < 10) {
    text += "the number is " + i;
    i++;
} */

console.log(text);

do {
    text += "the number is " + i;
    i++;
} while (i < 10)

console.log(text);

let name = 'sajib';
name[0] = 'S'; // it will not work, immutable
name = 'Sajib'; // it will work,
console.log(name);
