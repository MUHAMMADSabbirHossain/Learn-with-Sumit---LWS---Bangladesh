"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };

    play(status) {
        // debugger;
        console.log(this);

        console.log(`${this.name} aged ${this.age} is playing ${status}`);

    };
}

const person1 = new Person('Rahim', 25);

person1.play('well');