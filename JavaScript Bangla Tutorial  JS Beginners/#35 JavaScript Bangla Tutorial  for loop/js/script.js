const cars = ["A", "B", "C", "D", "E"];

for (let i = 0, j = 1; i < cars.length; i++) {
    console.log(i, j); // 
}

console.log("i am done");





function testFunc(value) {
    for (let index = 0; index < value; index++) {
        console.log(index);
        // setTimeout(() => {
        //     console.log(index);

        // }, index * 1000);

        // (function (index) {
        //     setTimeout(() => {
        //         console.log(index);

        //     }, index * 1000);
        // })(index);

        (function () {
            setTimeout(() => {
                console.log(index);
            }, index * 1000);
        })()
    }
    return "testFunc done";
}

console.log(testFunc(5));

// let i = 0;
// setInterval(function () { console.log("This code will be executed every 1 second.", i++); }, 1000)

