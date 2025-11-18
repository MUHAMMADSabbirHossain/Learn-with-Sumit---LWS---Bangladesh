console.log(Number("          ")); // 0
console.log(Number(" ")); // 0
console.log(Number("")); // 0


const person = {
    name: "Sakib",
    info: function () {
        console.log(`${this.name} is 38 years old.`);
    }
};

person.info();
console.log(typeof person.info);