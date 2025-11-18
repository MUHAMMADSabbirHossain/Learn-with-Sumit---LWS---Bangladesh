/* class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

const car1 = new Car("Toyota", 2017); // create actual object
const car2 = new Car("BMW", 2020); // create actual object
const car3 = new Car("Suzuki", 2008); // create actual object
console.log(car1);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    play(status) {
        console.log(`${this.name} is playing ${status}`);
    }
}

const person1 = new Person("Sakib", 35);
const person2 = new Person("Tamim", 36);

person1.play("Well");
person2.play("bad");
 */


// JavaScript Modules
import { name, age } from "./person.js";
import message from "./message.js";
import inlineDefalutExport, { inlineNamedExport } from "./testing.js";

console.log(name, age, message(), inlineNamedExport, inlineDefalutExport);