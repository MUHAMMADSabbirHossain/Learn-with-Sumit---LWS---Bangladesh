/* The try statement defines a code block to run (to try).

The catch statement defines a code block to handle any error.

The finally statement defines a code block to run regardless of the result.

The throw statement defines a custom error. */

try {
    // regular code
    addlert("we")
} catch (err) {
    console.log(err.name, err.message);
}


let x = " 99 ";
try {
    if (x.trim() == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 5) throw "too low";
    if (x > 10) throw "too high" /* throw {
        message: "Too high",
        name: "HighError"
    } */
}
catch (err) {
    console.log(err);
}

console.log("this is a test");
// throw new Error("");
