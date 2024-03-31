const person = {
    fullName: function (city = "", country = "", x = "") {
        console.log(this)
        return this.firstName + " " + this.lastName + city + country;

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
console.log(person.fullName.apply(person1));
console.log(person.fullName.apply(person2, ["dhaka", "bangladesh", "X"]));
