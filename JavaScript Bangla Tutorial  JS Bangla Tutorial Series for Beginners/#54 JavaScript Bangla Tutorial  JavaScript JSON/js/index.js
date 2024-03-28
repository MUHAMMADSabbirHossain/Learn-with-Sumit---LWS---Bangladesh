let text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

console.log(text);
const obj = JSON.parse(text);
console.log(obj);
console.log(obj.employees[0].firstName);

let person = {
    firstName: "Sumit",
    lastName: "Shah"
}

console.log(person);
console.log(JSON.stringify(person));


const objTest = {
    "Prince": ["Purple Rain"]
};
console.log(objTest);

objTest.newDot = ["new dot"];
objTest["newBracket"] = ["new breacket"];
newArrayVariable = "newArray"
objTest[newArrayVariable] = ["new array"];
// objTest = {...objTest,{"newSpreadOperator": ["new spread operator"]}}; now allowed
console.log(objTest);