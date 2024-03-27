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