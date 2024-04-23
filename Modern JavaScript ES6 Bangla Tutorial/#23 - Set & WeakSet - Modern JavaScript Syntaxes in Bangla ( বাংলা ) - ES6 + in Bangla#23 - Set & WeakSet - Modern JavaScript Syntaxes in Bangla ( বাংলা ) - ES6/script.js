function log(anything) {
    return console.log(anything);
}
// Sets
// let myArray = []; // literal syntax
// let myArray = new Array();
// myArray[0] = 5;
// myArray[1] = 2;

// let mySet = new Set();
// mySet.add(5);
// mySet.add("Bangladesh");
// mySet.delete("Bangladesh");
// log(mySet.has("Bangladesh"));
// mySet.add(5).add(6).add("Bangladesh");
// log(mySet.size);

// log(mySet);

// let myArray = [1, 2, 3];

// let mySet = new Set(myArray);

// for (let value of mySet) {
//     log(value);
// }
// log(mySet);

// log([...mySet]);
// log(Array.from(mySet));

// mySet.add(3); // not uniqe
// mySet.add(4);
/* mySet.add({
    a: 5,
    b: 2
});
mySet.add({
    a: 5,
    b: 2
}); */

/* let object = {
    a: 5,
    b: 2
};
mySet.add(object);
mySet.add(object);
mySet.add(object);
mySet.add(object);
mySet.add(object);
mySet.add(object); */
// log(mySet);

// let myArray = [1, 2, 3, 4, 5, 5, 5, 6, 5];

// log([...new Set(myArray)]);

/* let a = new Set([1, 2, 3]);
let b = new Set([4, 2, 3]);

let union = new Set([...a, ...b]);
log(union);

let intersection = new Set([...a].filter(x => b.has(x)));
log(intersection);

// a\b
let difference = new Set([...a].filter(x => !b.has(x)));
log(difference); */

// WeakSet
/* const ws = new WeakSet([{ a: 1 }, { b: 2 }]);
ws.add({ a: 1 })
log(ws); */
/* for (let value of ws) {
    log(value);
} // script.js:76 Uncaught TypeError: ws is not iterable */

const ws = new WeakSet();

class SomeClass {
    constructor() {
        ws.add(this);
    }
    method() {
        if (!ws.has(this)) {
            throw new Error("You can not access this method directly!");
        } else {
            return "i am method";
        }
    }
}

const a = new SomeClass();
log(a.method());
// log(SomeClass.prototype.method());