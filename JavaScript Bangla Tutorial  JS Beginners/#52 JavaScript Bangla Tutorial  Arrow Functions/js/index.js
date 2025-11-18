// const hello = () => console.log(this);
// hello();
// const RegFunc = function () {
//     console.log(this);
// }; RegFunc();


// const person = {
//     firstName: 'John',
//     lastName: 'Doe',

//     getFullNameReg: function () {
//         console.log(this);
//         return `${this.firstName} ${this.lastName}`;
//     },
//     getFullNameArrow: () => {
//         console.log(this);
//         return `${this.firstName} ${this.lastName}`;
//     },

//     innerPerson: {
//         arrowFunction: () => {
//             console.log(this);
//         },
//     }

// };
// console.log(person.getFullNameReg()); // {firstName: "John", lastName: "Doe", getFullName: ƒ}
// console.log(person.getFullNameArrow()); // {firstName: "John", lastName: "Doe", getFullName: ƒ}
// person.innerPerson.arrowFunction(); // {firstName: "John", lastName: "Doe", getFullName: ƒ}


// class Person1 {
//     constructor(name) {
//         this.name = name;
//     }
//     sayNameArrow = () => {
//         console.log(this);
//         console.log(this.name);
//     }

// }

// const john = new Person1("John");
// john.sayNameArrow(); // "John"



// const obj = {
//     name: "Object",
//     arrowFunc: () => {
//         console.log(this); // Refers to the global object (e.g., `window` in browsers)
//         console.log(this.name); // Undefined or refers to the global object (e.g., `window` in browsers)
//     },
//     regularFunc() {
//         console.log(this);
//         console.log(this.name); // "Object"
//     }
// };
// obj.arrowFunc();
// obj.regularFunc();

function ConstructorArrow(name) {
    this.name = name;
    this.getName = () => {
        console.log(this);
        console.log(this.name); // "Arrow Instance"
    };
}
const instance1 = new ConstructorArrow("Arrow Instance");
instance1.getName();

function ConstructorRegular(name) {
    this.name = name;
    this.getName = function () {
        console.log(this);
        console.log(this.name); // "Regular Instance"
    };
}
const instance2 = new ConstructorRegular("Regular Instance");
instance2.getName();


class MyClass {
    constructor(name) {
        this.name = name;
    }

    regularFunc() {
        console.log(this); // Refers to the class instance
        console.log(this.name);
    }

    arrowFunc = () => {
        console.log(this); // Refers to the class instance
        console.log(this.name); // Refers to the class instance
    };
}

const instance = new MyClass("Class Arrow");
instance.regularFunc();
instance.arrowFunc();





function createObject() {
    const obj = {
        name: "My Object",
        arrowFunc: () => {
            console.log(this); // Refers to the `this` of the createObject function
        },
    };
    return obj;
}
const outerObject = {
    name: "Outer Object",
    createInnerObject: createObject,
};
// `this` here refers to `outerObject`
const innerObject = outerObject.createInnerObject();
console.log(innerObject);

innerObject.arrowFunc(); // Logs `outerObject` instead of the global object


function outerFunction() {
    const obj = {
        arrowFunc: () => console.log(this), // Inherits `this` from outerFunction
    };
    return obj;
}

const newObject = outerFunction.call({ name: "Outer Scope" });
newObject.arrowFunc(); // Logs { name: "Outer Scope" }









// nice example. but i dont understant cause i am a beggener learner of js... can you understant my easy and simple way... this example will be good... but if there any other easy example please give that also. step by step


// 2/2

// ChatGPT said:
// ChatGPT
// Sure! Let me explain the concept in a step-by-step and simple way, followed by a simpler example.

// Step-by-Step Explanation:
// Arrow functions don’t have their own this:

// Instead of creating their own this, they take the this value from their surrounding (or lexical) scope.
// Literal Object Example:

// When an arrow function is inside a literal object, its surrounding scope is not always the object itself.
// If the object is inside another function, then the arrow function takes this from that function.
// Simpler Example: Here's an easier example with a nested object:

// Easy Example: Arrow Function and Lexical Scope
// javascript
// Copy
// Edit
// function outerFunction() {
//     const obj = {
//         name: "My Object",
//         arrowFunc: () => {
//             console.log(this.name); // `this` comes from outerFunction
//         },
//     };
//     return obj;
// }

// const outerObj = {
//     name: "Outer Object",
//     getInnerObject: outerFunction,
// };

// // Call `outerFunction` inside `outerObj`'s context
// const innerObject = outerObj.getInnerObject();
// innerObject.arrowFunc(); // Logs "Outer Object"
// What’s Happening?
// Arrow Function in obj:

// The arrowFunc inside obj doesn’t have its own this.
// It takes this from the scope of outerFunction.
// Call Context:

// outerFunction is called as a method of outerObj, so this inside outerFunction refers to outerObj.
// Result:

// The arrow function logs "Outer Object" because it inherits this from outerFunction, which gets this from outerObj.
// Even Simpler Example:
// Let’s avoid nested objects and make it as basic as possible:

// javascript
// Copy
// Edit
// function outerFunction() {
//     const obj = {
//         arrowFunc: () => console.log(this), // Inherits `this` from outerFunction
//     };
//     return obj;
// }

// const newObject = outerFunction.call({ name: "Outer Scope" });
// newObject.arrowFunc(); // Logs { name: "Outer Scope" }
// Why is it simpler?
// No nested calls: It's just one function (outerFunction) defining an object (obj).
// Context: The call method explicitly sets the this value to { name: "Outer Scope" }.
// Arrow function inherits this: The arrow function inside obj inherits this from outerFunction.
// Output:
// javascript
// Copy
// Edit
// { name: "Outer Scope" }
// This shows how this for the arrow function is not global, but inherited from the enclosing function.

// Let me know if you’d like further clarification! 😊




