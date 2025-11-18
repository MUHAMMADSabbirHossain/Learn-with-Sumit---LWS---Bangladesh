class Car {
    constructor(brand, year) {
        this._brand = brand;
        this._year = year;
    }

    present() {
        return `This is a ${this._brand} from ${this._year}. method`;
    }

    get presentGS() {
        return `This is a ${this._brand} from ${this._year}. getter`;
    }

    set presentGS(value) {
        this._brand = value;
    }

    parametersTest(value) {
        return `Parameters Test: ${value}`;
    }
}
console.log(Car);

Car.prototype.age = function () {
    return new Date().getFullYear() - this._year;
};


const myCar = new Car("Ford", 2010);
console.log(myCar);
console.log(myCar.present());
console.log(myCar.presentGS); // Ford
myCar.presentGS = "Honda";
console.log(myCar.presentGS); // Honda
console.log("Age: ", myCar.age());
console.log(myCar.parametersTest(`1st line
    2nd line
    3rd line `));


const myCar2 = new Car("Audi", 1999);
console.log(myCar2);
console.log(myCar2.present());
console.log(myCar2.presentGS);
console.log("Age: ", myCar2.age());



class Model extends Car {
    constructor(brand, model) {
        super(brand);
        this._model = model;
        this.defaultValue = "Default Value";
        this._defaultValueGS = "Default Value Getter Setter";
    }

    get modle() {
        return `This is a ${this._model} from ${this._brand}. getter`;
    }

    set modle(value) {
        this._model = value;
    }

    defaultValueOverride(value) {
        this.defaultValue = value;
        return `This is a ${this._model} from ${this._brand}. ${this.defaultValue}`;
    }

    get defaultValueGS() {
        return this._defaultValueGS;
    }

    set defaultValueGS(value) {
        this._defaultValueGS = value;
    }

    static get show() {
        return `This is a ${this._model} from ${this._brand}. static getter`;
    }

    static staticWithInstance(value) {
        console.log(value);

        return `This is a ${value} from ${value._model}. static getter`;
    }
}
console.log(Model);
console.log(Model.show);


const myModel = new Model("Ford", "Mustang");
console.log(myModel.modle); // Mustang getter
myModel.modle = "Honda"; // setter
console.log(myModel.modle); // Honda getter

console.log("testing: ", myModel.defaultValue); // "Default Value"
console.log("testing: ", myModel.defaultValueOverride("testing override value")); // "Default Value"

console.log(myModel.defaultValueGS); // Default Value Getter Setter
myModel.defaultValueGS = "Default Value Getter Setter muted"; // setter
console.log(myModel.defaultValueGS); // Honda
console.log(Model.staticWithInstance(myModel));
