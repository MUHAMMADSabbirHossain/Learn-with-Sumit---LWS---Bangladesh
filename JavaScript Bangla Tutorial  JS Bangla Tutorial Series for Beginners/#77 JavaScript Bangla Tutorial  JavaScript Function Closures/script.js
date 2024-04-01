const add = (function () {
    let counter = 0;
    return function () { counter += 1; return counter }
})();

console.log(add());
add();
add();
console.log(add());

