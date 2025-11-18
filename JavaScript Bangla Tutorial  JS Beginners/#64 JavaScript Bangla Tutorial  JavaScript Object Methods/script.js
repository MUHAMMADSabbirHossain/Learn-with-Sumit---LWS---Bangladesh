/* const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName); // function defination
console.log(typeof person.fullName); // function
console.dir(person.fullName); // function

console.log(person.fullName()); */


const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
};

person.fullName = function () {
    return (this.firstName + " " + this.lastName).toUpperCase();
}

console.log(person.fullName); // function defination
console.log(typeof person.fullName); // function
console.dir(person.fullName); // function

console.log(person.fullName());

