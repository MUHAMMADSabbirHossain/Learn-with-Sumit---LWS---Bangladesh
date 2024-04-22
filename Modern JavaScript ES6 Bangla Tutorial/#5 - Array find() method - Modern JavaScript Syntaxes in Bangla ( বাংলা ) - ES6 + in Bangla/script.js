// Array.prototype.find()
/* var numbers = [1, 2, 3, 4, 5, 6, 10];

var result = numbers.find(function (currentValue, currentIndex, arr) {
    return currentValue > 4;
}, this);

console.log(numbers);

console.log(result); */

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    test() {
        console.log("Hello");
    }
    /*     exampleFunction() {
            let array = [1, 2, 3];
            array.find(function () {
                this.test();
            }, this);
        } */
    exampleFunction() {
        let array = [1, 2, 3];
        array.find(() => {
            this.test();
        });
    }
    // exampleFunction() {
    //     let array = [1, 2, 3];
    //     array.find(function () {
    //         this.test();
    //     });
    // }
}

let student = new Student("sumit", 35);
student.exampleFunction();
