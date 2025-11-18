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

// Person.country = "bangladesh" // not recommed error
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

Object.prototype.ObjFun = function () {
    return "I am doing fun with object!";
}

console.log(x.ObjFun()); // I am doing fun with object!: contructor Properties -> prototype -> ... ... ...-> Object.prototype -> null



Object.defineProperty(Object.prototype, "getterDefinePropertyTesting", {
    get: function () {
        return "Testing for getter with prototype and defineProperty";
    },
    enumerable: false, // Hides from loops
    configurable: true  // Allows deletion/modification
});


Object.prototype.getterPrototypeTesting = {
    get value() {
        return "testing for getter with prototype";
    }
}

console.log({ x });
console.log(x.getterPrototypeTesting); // {function: "testing for getter with prototype"}
console.log(x.getterPrototypeTesting.value); // testing for getter with prototype



const obj = {};

console.log({ obj });
console.log(obj.getterDefinePropertyTesting); // "Testing for getter with defineProperty"