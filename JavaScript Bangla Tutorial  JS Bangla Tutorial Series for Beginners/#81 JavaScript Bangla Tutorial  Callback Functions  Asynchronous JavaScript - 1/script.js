/* function display(some) {
    // document.getElementById("demo").innerHTML = some;
    console.log(some);
}

function calculator(num1, num2) {
    let sum = num1 + num2;
    // return sum;
    display(sum);
}

let result = calculator(5, 5);
// display(result); */


/* function display(some) {
    // document.getElementById("demo").innerHTML = some;
    console.log(some);
}

function calculator(num1, num2, callback) {
    let sum = num1 + num2;
    // return sum;
    if (callback) callback(sum);
    return sum;

}

let result = calculator(5, 5, display);
// display(result);
console.log(result); */



function calculator(num1, num2, callback) {
    let sum = num1 + num2;
    // return sum;
    if (callback) callback(sum);
    return sum;
}

let result = calculator(5, 5, function (result) {
    console.log(result);
});