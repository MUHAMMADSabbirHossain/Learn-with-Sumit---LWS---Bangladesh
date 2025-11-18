class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    run(speed) {
        console.log(this.name + "is running in " + speed);
    }
}

const bmw = new Car("BMW", 1999);
const audi = new Car("Audi", 2000);

bmw.run("100 km per hour");