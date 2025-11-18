const mySet = new Set();

mySet.add("a");
mySet.add("b");
mySet.add("c");
mySet.add("a");

console.log("set: ", mySet);

// list all elements
let text = "";
mySet.forEach(function (value) {
    text += value;
});

for (let element of mySet.values()) {
    console.log(element);
}

console.log(text);

console.log("values() method: ", mySet.values());
console.log(mySet.size);

/* let test = 0;
label: {
    console.log(test);

    if (test <= 5) {
        continue label;
    }else{
        break label;
    }
} */

/* 
// Uncaught SyntaxError: Illegal continue statement: 'outer' does not denote an iteration statement

let i = 0;
outer: { // Label for the block
    if (i < 5) { // Loop condition
        console.log(i); // Perform actions
        i++; // Increment
        if (true) continue outer; // Simulate loop continuation
    }
    break outer; // Exit the loop when the condition is false
}
 */

let i = 0;

function loop() {
    if (i >= 5) return; // Exit condition
    console.log(i); // Perform actions
    i++; // Increment
    loop(); // Recursive call to simulate the next iteration
}

loop();

