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