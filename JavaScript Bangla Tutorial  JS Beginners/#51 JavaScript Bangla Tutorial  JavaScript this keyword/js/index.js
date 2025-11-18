console.log(this); // window


function test() {
    console.log(this); // window
} test();

const obj = {
    test: function () {
        console.log(this); // obj
    }
}; obj.test();

// in use strict mode this will be undefined

// event this is the received element

// call, apply, bind car refer this to a specific object

// implicit binding
const person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    },
    getFullName: function () {
        return this.fullName();
    },
};
console.log(person.fullName());
console.log(person.getFullName());

// explicit binding with call, apply, bind
const person1 = {
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    },
};
const person2 = {
    firstName: 'John',
    lastName: 'Doe',
};

console.log(person1.fullName.call(person2));
console.log(person1.fullName.apply(person2));

const personBind = person1.fullName.bind(person2);
console.log(personBind());



