// function default parameter value
function myFunc(x = 10) {
    return x;
}

console.log(myFunc()); // 10
console.log(myFunc(5)); // 5
console.log(myFunc(undefined)); // 10
console.log(myFunc(null)); // null
console.log(myFunc(NaN)); // NaN