

const obj = {
    a: function () {
        console.log("regular function :", this);
        function b() {
            console.log("nested regular function: ", this);
        }
        b();
        (() => {
            console.log("nested arrow function: ", this);

        })();
    },
    arrowTest: () => {
        console.log("arrow function: ", this);
        (function () {
            console.log('regular function in arrow: ', this);
        })();
        (() => {
            console.log("arrow function in nested arrow function: ", this);

        })();
    }
}

obj.a();
obj.arrowTest();