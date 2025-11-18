/* const person = {
    name: 'Sumit',
    age: 35,
    getName: function () {
        return 'Sumit'
    }
};

person.name = "Bangladesh"; // mutted

person.age = 36;
const a = 'age';
console.log(person);
console.log(person.age);
console.log(person['age']); // used for dynamic programming
console.log(person[a]); */

const person = {
    fname: " John",
    lname: " Doe",
    age: 25
};

let txt = '';
for (let x in person) {
    console.log(x);
    txt += person[x];
}

console.log(txt); //  John Doe25

person.country = "Bangladesh"; // add property
person.age = 26; // delete property
console.log(person);
delete person['age']; // delete property
console.log(person);


const myObj = {
    name: "John",
    age: 30,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] }
    ]
}

myObj.name
console.dir(myObj);
for (let i in myObj.cars) {
    console.log(i);
}

let a = new String("Bangladesh");
console.log(a.toUpperCase());
console.log(a);

console.dir(a);