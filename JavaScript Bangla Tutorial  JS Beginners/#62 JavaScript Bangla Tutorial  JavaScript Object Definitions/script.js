const person = {
    name: 'Sumit',
    age: 35,
    getName: function () {
        return 'Sumit'
    }
};

person.name = "Bangladesh"; // mutted

const number = 3; // immutable
// number = 4;

const person2 = person;

person.age = 36;
console.log(person2);


// self test string primitive: immutable
let test = `testing`;
console.log(test);
test[2] = `x`; // immutable
console.log(test); // testing

// self test string object: immutable
let testObj = new String(`Object String tessssting`);
console.log("before experiment: ", testObj, testObj[2]);

testObj[0] = `x`; // immutable
console.log("after experiment: ", testObj, testObj[2]);

let replaceTest = testObj.replaceAll('s', 'x');
console.log("replace experiment: ", { replaceTest }, testObj, testObj[2]);
console.log(testObj.replace('s', 'x')); // immutable

