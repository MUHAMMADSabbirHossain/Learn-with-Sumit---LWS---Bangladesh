// ES6 fat arrow function
/* function number() {
    return 10;
} */

/* let number = () => {
    return 10;
}; */

// let number = () => 10;

// console.log(number());

/* let number = () => {
    console.log(10);
} */

// let number = () => console.log(10);
// number();


/* var javascript = {
    name: 'Javascript',
    libraries: ['React', 'Angular', 'Vue'],
    printLibraries: function () {
        console.log(this);
        var self = this;
        this.libraries.forEach(function (a) {
            console.log(this);
            // console.log(`${this.name} loves ${a}`);
            console.log(`${self.name} loves ${a}`);
        })
    }
}

javascript.printLibraries(); */

var javascript = {
    name: 'Javascript',
    libraries: ['React', 'Angular', 'Vue'],
    printLibraries: function () {
        console.log(this);
        // var self = this;
        this.libraries.forEach((a) => {
            // console.log(this);
            console.log(`${this.name} loves ${a}`);
            // console.log(`${self.name} loves ${a}`);
        })
    }
}

javascript.printLibraries();

// new keyword in fat arrow function
function Person(name) {
    this.name = name;
}

// var Person = (name) => {
//     this.name = name; 
// } 
// script.js:61 Uncaught TypeError: Person is not a constructor

var sakib = new Person('Sakib');
