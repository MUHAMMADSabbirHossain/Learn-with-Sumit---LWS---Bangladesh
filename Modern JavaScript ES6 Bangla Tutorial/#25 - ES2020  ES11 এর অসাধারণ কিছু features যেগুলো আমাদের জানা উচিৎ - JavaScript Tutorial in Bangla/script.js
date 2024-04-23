// window.setTimeout(() => console.log("hello"), 100);
// global.setTimeout(() => console.log("hello"), 100);

// The global this was not standardized befor ES!!. Solution was
/* var setGlobal = function () {
    if (typeof window !== "undefined") { return window };
    if (typeof global !== "undefined") { return global };
    throw new Error("unable to locate global object");


}

var myGlobal = getGlobal();
myGlobal.setTimeout(() => console.log("hello"), 100); */

/* // from ES11 we can use globalThis
globalThis.setTimeout(() => console.log("hello"));
window === globalThis // true in browser
global === globalThis // ture in node */

/* // BigInt
let largest_number = Number.MAX_SAFE_INTEGER;
largest_number += 1;
// largest_number += 1;
largest_number = BigInt(largest_number) + 1n;
console.log(largest_number);

// Equality
10n === BigInt(10); // ture
10n == 10; // ture
10n === 10; // false */

/* const language = {
    name: "JavaScript",
    creator: "Brendan Eich",
    library: {
        react: {
            company: "Fackbook"
        }
    }
};

// let company = language.library.react.company;
// let company = language && language.library && language.library.react && language.library.react.company ? language.library.react.company : undefined;
// let company = language?.library?.react?.company;
// console.log(company);

// Arrays
let colors = ['red', 'green', 'blue'];
console.log(colors?.[1]); */

/* // nullish coalesing operation
let language;
language = null;
console.log(language ?? "JavaScript"); // javascript
console.log(language || "JavaScript"); // javascript */

/* // dynamic Import
// (async function () {
//     const { add } = await import('./utils.js');
//     const { remove } = await import('./utils.js');
//     add();
//     remove();
// })();

import('./utils.js')
    .then(({ add, remove }) => {
        add();
        remove();
    }); */


/* // promise.allsetteled
const promise1 = new Promise(resolve => resolve("burger"));
const promise2 = new Promise(reject => reject("apple"));
const promise3 = new Promise(resolve => resolve("pizza"));

// Promise.all([promise1, promise2, promise3])
//     .then(response => console.log(response))
//     .catch(error => console.log(error))

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response)) */


// string.prototype.matchAll()
const text = "My favorite colors are #FFFFFF and #000000";
// const regex = /#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/g;
const regex = /#?(?<group1>[\da-fA-F]{2})(?<group2>[\da-fA-F]{2})(?<group3>[\da-fA-F]{2})/g;

const matches = text.match(regex);
console.log(matches);
const matchesAll = text.matchAll(regex);
for (let match of matchesAll) {
    console.log(match);
}