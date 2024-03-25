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