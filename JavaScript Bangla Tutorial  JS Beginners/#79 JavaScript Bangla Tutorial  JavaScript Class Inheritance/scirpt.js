/* class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return 'I have a ' + this.carname;
    }
}

class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model;
    }
}

let myCar = new Model("Ford", "Mustang");
console.log(myCar.show()); */

class Car {
    constructor(brand) {
        this.carName = brand
    }
    present() {
        return "I have a " + this.carName;
    }
}
console.log(Car);
console.log(Car.carName); // undefined

// const myCar = new Car("Ford");
// console.log(myCar);
// console.log(myCar.carName);
// console.log(myCar.present());


// inheritance
class Model extends Car {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }
    show() {
        return this.present() + ", it is a " + this.model;
    }
}
const myCar = new Model("Ford", "Mustang");
console.log(myCar.show());