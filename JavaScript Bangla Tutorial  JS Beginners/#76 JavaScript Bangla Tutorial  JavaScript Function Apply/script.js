// "use strict";

const person = {
    firstName: "dummy",
    fullName: function (city = "", country = "", x = "") {
        console.log(this);
        return this.firstName + " " + this.lastName + " " + city + " " + country;

    }
};
const person1 = {
    firstName: "John",
    lastName: "Doe"
};
const person2 = {
    firstName: "Mary",
    lastName: "Doe"
};

// This will return "John Doe":
console.log(person.fullName());
console.log(person.fullName.apply());
console.log(person.fullName.apply(person1));
console.log(person.fullName.apply(person2, ["dhaka", "bangladesh", "X"]));


console.log(Math.max.apply(null, [1, 2, 3, 4, 5, 3, 2])); // 
console.log(Math.max.call(null, 1, 2, 3, 4, 5, 3, 2));



// function Bind
console.log("--------------  Function Bind  ----------------");

const bindPerson = {
    firstName: "John",
    lastName: "Doe",
    fullName: function (city = "", country = "") {
        console.log(this);
        return this.firstName + " " + this.lastName + " " + city + " " + country;
    }
}

const member = {
    firstName: "Hege",
    lastName: "Nilsen",
}

console.log(bindPerson.fullName());
console.log(bindPerson.fullName.bind());

let fullName = bindPerson.fullName.bind(member);
console.log(fullName());


const bindThisperson = {
    firstName: "John",
    lastName: "Doe",
    display: function () {
        console.log(this);

        let x = document.getElementById("demo");
        x.innerHTML = this.firstName + " " + this.lastName;
    }
}

let display = bindThisperson.display.bind(bindThisperson);

setTimeout(bindThisperson.display, 2000); // lost this

setTimeout(function () {
    bindThisperson.display();
}, 3000); // it will work

setTimeout(function () {
    bindThisperson.display.call(bindThisperson);
}, 4000); // it will work

setTimeout(display, 5000); // it will work
