/* // Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get fullname() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullname); */

/* // Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    set lang(lang) {
        this.language = lang;
    }
};

person.lang = "bn";

console.log(person); */



/* // Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    fullname: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullname()); */



const person = {
    firstName: "John",
    lastName: "Doe",
};

Object.defineProperty(person, "fullName", {
    get: function () {
        return this.firstName + " " + this.lastName;
    }
});

person.age = 35;

console.log(person.fullName);