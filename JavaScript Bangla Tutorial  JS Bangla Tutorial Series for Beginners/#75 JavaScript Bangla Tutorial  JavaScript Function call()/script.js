/* function myFunction(arg1, arg2) {
    this.firstName = arg1;
    this.lastName = arg2;
}
// invokation
myFunction();
new myFunction();
myObject.myFunction();

// call function : .call() */

/* const a = {
    firstName: "sumit",
    sleep: function () {
        console.log(`${this.firstName} am sleeping.`);
    }
}
a.sleep(); */

/* function sleep() {
    console.log("I am sleeping.");
}
sleep(); // window object

window = {
    sleep: function () {
        console.log("I am sleeping.");
    }
}
window.sleep(); // window object */


const person = {
    fullName: function (city = "", country = "") {
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
console.log(person.fullName.call(person1));
console.log(person.fullName.call(person2));
console.log(person.fullName.call(person2, "dhaka", "bangladesh"));