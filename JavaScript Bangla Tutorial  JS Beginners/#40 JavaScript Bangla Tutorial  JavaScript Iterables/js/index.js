/* function myNumbers() {
    let n = 0;
    return {
        next: function () {
            n += 10;
            return { value: n, done: false };
        }
    }
}

console.log(myNumbers());
const n = myNumbers();
n.next(); // returns 10;
n.next(); // returns 20;
n.next(); // returns 30;

console.log(n.next()); // returns 40; */

// create an Object
myNumbers = {};
console.log(myNumbers);

myNumbers[Symbol.iterator] = function () {
    let n = 0;
    done = false;
    return {
        next() {
            n += 10;
            if (n == 100) { done = true; }
            return { value: n, done: done };
        }
    };
}

console.log(myNumbers);

let text = ""
for (const num of myNumbers) {
    text += num + "1st <br>"
}
console.log(text);

let iterator = myNumbers[Symbol.iterator]();
text = "";
while (true) {
    const result = iterator.next();
    if (result.done) break;
    // Any Code Here 
    text += result.value + "2nd <br>";
}
console.log(text);