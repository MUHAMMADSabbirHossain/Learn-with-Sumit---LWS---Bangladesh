// const jsonString = '{"name":"John", "age":30, "city":"New York"}'
// const jsonString = '{"name":"John", "age":30, "city":undefined}' // unvalid json
// const jsonString = '["Ford", "BMW", "Audi", "Fiat"]';

// const jsonString = '{"name":"John", "birth":new Date(1986-12-14), "city":"New York"}';
// const jsonString = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
// const jsonString = '{"name":"John", "age":function () {return 30;}, "city":"New York"}';
const jsonString = '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';


console.log(jsonString);
// convert to valud JS object
// const myObj = JSON.parse(jsonString);
const myObj = JSON.parse(jsonString, function (key, value) {
    // console.log(`${key} - ${value}`);
    // console.log("-----");
    if (key === "birth") {
        return new Date(value);
    }
    return value;
});

console.log(myObj);
// console.log(new Date(myObj.birth));
console.log(myObj.age);
console.log(eval("(" + myObj.age + ")"));
const evalFunvalue = eval("(" + myObj.age + ")");
console.log(evalFunvalue());

