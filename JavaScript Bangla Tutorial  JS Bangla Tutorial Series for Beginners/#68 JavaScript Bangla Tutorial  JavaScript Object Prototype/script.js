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


// sumit.country = "Bangladesh";
// console.log(jasim);
// console.log(sumit);

// Person.country = "bangladesh" // not recommed
Person.prototype.country = "Bangladesh";
console.dir(Person);
console.log(Person);

console.log(sumit.country); // Bangladesh
console.log(jasim.country); // Bangladesh


const john = new String('john');
console.dir(john);
console.log(john.toUpperCase());

String.prototype.doungFun = function () {
    return "I am doing fun!";
}

const x = 'Bangladesh';
console.log(x.doungFun());