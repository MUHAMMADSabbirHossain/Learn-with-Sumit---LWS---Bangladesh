var x = 4;
var y = 5;
var z = x * y;
const myObj = {
    name: "JavaScript",
    founder: "Brendan Eich",
    estd: "1995",
    ranking: 1,
    // x: x,
    // y: y,
    // z: z,
    x,
    y,
    z,
};
var keys = Object.keys(myObj);
var values = Object.values(myObj);
var entries = Object.entries(myObj);
console.log(keys);
console.log(values);
console.log(entries);

// object shorthand
