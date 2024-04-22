// rest operator
/* function myFuc(a, b) {
    console.log(a, b);
}

myFuc(5, 6); */
function myFuc(a, ...params) {
    // console.log(arguments);
    // console.log(a, b);
    console.log(params);
    console.log(a);
}

myFuc(5, 6, 7, 8, 9);