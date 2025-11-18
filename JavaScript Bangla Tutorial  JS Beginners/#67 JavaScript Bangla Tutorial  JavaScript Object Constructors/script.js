/* const sumit = {
    firstName: "sumit",
    lastName: "saha",
    age: 35,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

const rahim = {
    firstName: "rahim",
    lastName: "islam",
    age: 32,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}; */

function Person(first, last, age) { // constructor function
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
}

const sumit = new Person("sumit", "shah", 35);
const jasim = new Person("jasim", "uddin", 30);
const rahim = new Person("Rahim", "islam", 32);

console.log(sumit);
console.log(sumit.fullName());
console.log(jasim.fullName());

sumit.country = "Bangladesh";
console.log(jasim);
console.log(sumit);

// Person.country = "bangladesh" // not recommed

const firstName = new String("John");
console.log(typeof firstName);