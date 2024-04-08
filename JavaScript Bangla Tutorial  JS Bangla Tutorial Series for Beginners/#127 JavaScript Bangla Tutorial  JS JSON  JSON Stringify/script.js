// const obj = { name: "John", age: 30, city: "New York" };
// const obj = ["John", "Peter", "Sally", "Jane"];
const obj = { name: "John", today: new Date(), city: "New York" };

console.log(obj);

// convert it into json
const json = JSON.stringify(obj);
console.log(json);