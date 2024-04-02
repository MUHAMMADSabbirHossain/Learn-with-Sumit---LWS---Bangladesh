/* function hello() {
    console.log("line 2 code");
}
console.log("line 1 code");
hello();
console.log("line 3 code"); */


console.log("line 1 code");
setTimeout(() => {
    console.log("line 2 code"); // 
}, 2000);
console.log("line 3 code");


console.log("line 1 code");
setInterval(() => {
    console.log("line 2 code"); // 
}, 2000);
console.log("line 3 code");



